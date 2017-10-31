
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
    public class UserRepository : MongoCrudRepository<User>, IUserRepository
    {
        public UserRepository(IOptions<Settings> settings) : base(settings) {}

        public async Task<User> GetByLoginAsync(string login)
        {
            var filter = Builders<User>.Filter.Eq(nameof(User.Login), login);
            return await this.GetMongoCollection()
                .Find(filter)
                .FirstOrDefaultAsync();
        }
    }
}