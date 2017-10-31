
using System.Threading.Tasks;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
    public interface IUserRepository : ICrudRepository<User>
    {
        Task<User> GetByLoginAsync(string login);
    }
}