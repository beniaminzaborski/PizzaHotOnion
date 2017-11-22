using System.Threading.Tasks;
using PizzaHotOnion.DTOs;

namespace PizzaHotOnion.Services
{
  public interface IAuthenticationService
  {
    Task<bool> SignIn(string login, string password);
    Task SignUp(RegisterUserDTO registerUserDTO);
    Task ChangePassword(ChangePasswordDTO changePasswordDTO);
  }
}