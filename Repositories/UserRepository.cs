
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
  public class UserRepository : MongoCrudRepository<User>, IUserRepository
  {
    public UserRepository(IOptions<Settings> settings) : base(settings) { }

    public async Task<User> GetByEmailAsync(string login)
    {
      var filter = Builders<User>.Filter.Eq(nameof(User.Email), login);
      return await this.GetMongoCollection()
          .Find(filter)
          .FirstOrDefaultAsync();
    }

    public async Task<bool> CheckEmailExists(string email)
    {
      var filter = Builders<User>.Filter.Eq(nameof(User.Email), email);
      return await this.GetMongoCollection()
          .Find(filter)
          .AnyAsync();
    }
  }
}