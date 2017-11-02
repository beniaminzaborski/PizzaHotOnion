using System;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using PizzaHotOnion.Services;

namespace PizzaHotOnion.Infrastructure.Security
{
  public class TokenProviderMiddleware
  {
    private readonly RequestDelegate next;
    private readonly TokenProviderOptions options;
    private IAuthenticationService authenticationService;

    private readonly ILogger<TokenProviderMiddleware> logger;

    public TokenProviderMiddleware(
        RequestDelegate next,
        IOptions<TokenProviderOptions> options,
        ILogger<TokenProviderMiddleware> logger)
    {
      this.next = next;
      this.options = options.Value;
      this.logger = logger;
    }

    public Task Invoke(HttpContext context, IAuthenticationService authenticationService)
    {
      this.authenticationService = authenticationService;

      // If the request path doesn't match, skip
      if (!context.Request.Path.Equals(options.Path, StringComparison.Ordinal))
      {
        return next(context);
      }

      //// Request must be POST with Content-Type: application/x-www-form-urlencoded
      if (!context.Request.Method.Equals("POST"))
      {
        context.Response.StatusCode = 400;
        return context.Response.WriteAsync("Bad request.");
      }

      return GenerateToken(context);
    }

    private async Task<Login> ExtractJsonRequest(HttpRequest request)
    {
      string json = await new StreamReader(request.Body).ReadToEndAsync();
      return JsonConvert.DeserializeObject<Login>(json);
    }

    private async Task GenerateToken(HttpContext context)
    {
      //string json = new StreamReader(context.Request.Body).ReadToEnd();
      var login = ExtractJsonRequest(context.Request).Result;
      // var username = context.Request.Form["username"];
      // var password = context.Request.Form["password"];
      var username = login.Username;
      var password = login.Password;
      logger.LogInformation("JSON from request body: " + username + "/" + password);

      var identity = await GetIdentity(username, password);
      if (identity == null)
      {
        context.Response.StatusCode = 400;
        await context.Response.WriteAsync("Invalid username or password.");
        return;
      }

      var now = DateTime.Now/*UtcNow*/;

      // Specifically add the jti (random nonce), iat (issued timestamp), and sub (subject/user) claims.
      // You can add other claims here, if you want:
      var claims = new Claim[]
      {
        new Claim(JwtRegisteredClaimNames.Sub, username),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim(JwtRegisteredClaimNames.Iat,  new DateTimeOffset(now).ToUnixTimeSeconds().ToString(), ClaimValueTypes.Integer64)
      };

      // Create the JWT and write it to a string
      var jwt = new JwtSecurityToken(
          issuer: options.Issuer,
          audience: options.Audience,
          claims: claims,
          notBefore: now,
          expires: now.Add(options.Expiration),
          signingCredentials: options.SigningCredentials);
      var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

      var response = new
      {
        Result = new
        {
          access_token = encodedJwt,
          expires_in = (int)options.Expiration.TotalSeconds
        }
      };

      // Serialize and return the response
      context.Response.ContentType = "application/json";
      await context.Response.WriteAsync(JsonConvert.SerializeObject(response, new JsonSerializerSettings { Formatting = Formatting.Indented }));
    }

    private async Task<ClaimsIdentity> GetIdentity(string username, string password)
    {
      if (await authenticationService.SignIn(username, password))
        //return Task.FromResult(new ClaimsIdentity(new System.Security.Principal.GenericIdentity(username, "Token"), new Claim[] { }));
        return new ClaimsIdentity(new System.Security.Principal.GenericIdentity(username, "Token"), new Claim[] { });

      // Credentials are invalid, or account doesn't exist
      //return Task.FromResult<ClaimsIdentity>(null);
      return null;
    }
  }
}