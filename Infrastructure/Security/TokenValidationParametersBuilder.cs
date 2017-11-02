using System;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace PizzaHotOnion.Infrastructure.Security
{
  public class TokenValidationParametersBuilder
  {
    public TokenValidationParameters Build()
    {
      // Add JWT Auth
      var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecurityConsts.JWTKey));
      var tokenValidationParameters = new TokenValidationParameters
      {
        // The signing key must match!
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = signingKey,

        // Validate the JWT Issuer (iss) claim
        ValidateIssuer = true,
        ValidIssuer = "PizzaHotOnion",

        // Validate the JWT Audience (aud) claim
        ValidateAudience = true,
        ValidAudience = "PizzaHotOnion",

        // Validate the token expiry
        ValidateLifetime = true,

        // If you want to allow a certain amount of clock drift, set that here:
        ClockSkew = TimeSpan.Zero
      };

      return tokenValidationParameters;
    }
  }
}