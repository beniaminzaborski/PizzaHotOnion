using System.Threading.Tasks;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Services
{
  public class AuthenticationService : IAuthenticationService
  {
    private readonly IUserRepository userRepository;
    private readonly IPasswordHasher passwordHasher;

    public AuthenticationService(
      IUserRepository userRepository,
      IPasswordHasher passwordHasher)
    {
      this.userRepository = userRepository;
      this.passwordHasher = passwordHasher;
    }

    public async Task<bool> SignIn(string login, string password)
    {
      var user = await this.userRepository.GetByLoginAsync(login);
      if(user == null)
        return false;

      var hashedPassword = this.passwordHasher.Hash(login, password);
      if(user.Passwd == hashedPassword)
        return true;

      return false;  
    }
  }
}