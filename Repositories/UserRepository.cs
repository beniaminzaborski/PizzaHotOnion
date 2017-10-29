
using Microsoft.Extensions.Options;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
    public class UserRepository : MongoCrudRepository<User>, IUserRepository
    {
        public UserRepository(IOptions<Settings> settings) : base(settings) {}
    }
}