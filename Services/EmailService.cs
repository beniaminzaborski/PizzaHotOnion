using System;
using System.Net.Mail;
using System.Threading.Tasks;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Services
{
  public class EmailService : IEmailService
  {
    private string server;
    private int port;
    private string from;
    private string user;
    private string passwd;

    public EmailService(string server, int port, string from, string user, string passwd)
    {
      this.server = server;
      this.port = port;
      this.from = from;
      this.user = user;
      this.passwd = passwd;
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
        //MailMessage mm = new MailMessage(from, to, subject, body);
        client.Send(message);
      }
      catch (Exception ex)
      {
        //EXCEPTION: The specified string is not in the form required for an e-mail address.
      }
    }
  }
}