using System;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Services
{
  public class EmailService : IEmailService
  {
    private readonly string server;
    private readonly int port;
    private readonly string from;
    private readonly string user;
    private readonly string passwd;

    private readonly ILogger<EmailService> loggger;

    public EmailService(IOptions<Settings> settings, ILogger<EmailService> logger)
    {
      this.loggger = logger;

      this.server = settings.Value.MailServer;
      this.port = settings.Value.MailPort;
      this.from = settings.Value.MailSender;
      this.user = settings.Value.MailUser;
      this.passwd = settings.Value.MailPasswd;
    }

    public void Send(string to, string subject, string body)
    {
      try
      {
        SmtpClient client = new SmtpClient
        {
          Host = server,
          Port = port,
          EnableSsl = true,
          DeliveryMethod = SmtpDeliveryMethod.Network,
          Credentials = new System.Net.NetworkCredential(user, passwd),
          Timeout = 10000,
        };

        if (string.IsNullOrWhiteSpace(to))
          return;

        var recipents = to.Split(",");
        MailMessage message = new MailMessage();
        message.From = new MailAddress(from);
        foreach (var recipent in recipents)
        {
          try
          {
            message.To.Add(recipent);
          }
          catch { }
        }
        message.Body = body;
        message.Subject = subject;
        client.Send(message);
      }
      catch (Exception ex)
      {
        loggger.LogError(ex.Message);
      }
    }
  }
}