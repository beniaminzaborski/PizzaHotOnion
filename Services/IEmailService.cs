using System.Threading.Tasks;

namespace PizzaHotOnion.Services
{
  public interface IEmailService
  {
    void Send(string to, string subject, string body);
  }
}