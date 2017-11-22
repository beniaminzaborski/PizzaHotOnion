using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;
using PizzaHotOnion.Services;
using Swashbuckle.AspNetCore.Swagger;

namespace PizzaHotOnion
{
  public class Startup
  {
    private TokenValidationParameters tokenValidationParameters;

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddSignalR();

      services.AddCors(options => options.AddPolicy("AllowAny", x =>
      {
        x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
      }));

      services.AddMvc();

      services.Configure<Settings>(options =>
      {
        options.ConnectionString = Program.Configuration.GetSection("MongoConnection:ConnectionString").Value;
        options.Database = Program.Configuration.GetSection("MongoConnection:Database").Value;
        options.MailServer = Program.Configuration.GetSection("Mailer:Server").Value;
        options.MailPort = int.Parse(Program.Configuration.GetSection("Mailer:Port").Value);
        options.MailSender = Program.Configuration.GetSection("Mailer:Sender").Value;
        options.MailUser = Program.Configuration.GetSection("Mailer:User").Value;
        options.MailPasswd = Program.Configuration.GetSection("Mailer:Passwd").Value;
      });

      services.AddSingleton<IPasswordHasher, Md5PasswordHasher>();
      services.AddScoped<IUserRepository, UserRepository>();
      services.AddScoped<IRoomRepository, RoomRepository>();
      services.AddScoped<IOrderRepository, OrderRepository>();
      services.AddScoped<IOrdersApprovalRepository, OrdersApprovalRepository>();
      services.AddScoped<IAuthenticationService, AuthenticationService>();
      services.AddSingleton<IEmailService, EmailService>();
      // services.AddSingleton<IEmailService>(new EmailService(
      //   Program.Configuration.GetSection("Mailer:Server").Value,
      //   int.Parse(Program.Configuration.GetSection("Mailer:Port").Value),
      //   Program.Configuration.GetSection("Mailer:Sender").Value,
      //   Program.Configuration.GetSection("Mailer:User").Value,
      //   Program.Configuration.GetSection("Mailer:Passwd").Value
      // ));

      //JWT
      tokenValidationParameters = new TokenValidationParametersBuilder().Build();
      services
      .AddAuthenticationCore(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      })
      .AddAuthentication(options =>
      {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(o =>
      {
        // You also need to update /wwwroot/app/scripts/app.js
        //o.Authority = tokenValidationParameters.ValidIssuer;
        o.Audience = tokenValidationParameters.ValidAudience;
        o.TokenValidationParameters = tokenValidationParameters;
        o.RequireHttpsMetadata = false;
      });

      // Register the Swagger generator, defining one or more Swagger documents
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new Info { Title = "Pizza Hot Onion API", Version = "v1" });
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory
        .AddFile("Logs/HotOnion-{Date}.log");

      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.Use(async (context, next) =>
      {
        await next();
        if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.StartsWithSegments(new PathString("/api")))
        {
          context.Request.Path = "/index.html";
          await next();
        }
      });

      app.UseCors(config =>
        config.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()
      );

      // Add JWT generation endpoint
      app.UseMiddleware<TokenProviderMiddleware>(
        Options.Create(new TokenProviderOptions
        {
          Audience = tokenValidationParameters.ValidAudience,
          Issuer = tokenValidationParameters.ValidIssuer,
          SigningCredentials = new SigningCredentials(tokenValidationParameters.IssuerSigningKey, SecurityAlgorithms.HmacSha256),
        })
      );

      app.UseAuthentication();

      app.UseSignalR(routes =>
      {
        routes.MapHub<MessageHub>("message");
      });

      app.UseDefaultFiles(new DefaultFilesOptions { DefaultFileNames = new List<string> { "index.html" } })
          .UseStaticFiles()
          .UseMvc();

      // Enable middleware to serve generated Swagger as a JSON endpoint.
      app.UseSwagger();

      // Enable middleware to serve swagger-ui (HTML, JS, CSS etc.), specifying the Swagger JSON endpoint.
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Pizza Hot Onion API V1");
      });
    }
  }
}
