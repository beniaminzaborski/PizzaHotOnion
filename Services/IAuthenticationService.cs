using System.Threading.Tasks;

namespace PizzaHotOnion.Services
{
  public interface IAuthenticationService
  {
    Task<bool> SignIn(string login, string password);
  }
}