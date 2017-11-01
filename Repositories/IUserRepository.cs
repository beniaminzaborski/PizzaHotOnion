
using System.Threading.Tasks;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
  public interface IUserRepository : ICrudRepository<User>
  {
    Task<User> GetByLoginAsync(string login);
    Task<bool> CheckLoginExists(string login);
    Task<bool> CheckEmailExists(string email);
  }
}