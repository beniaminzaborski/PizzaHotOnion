
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;
using System.Threading.Tasks;

namespace PizzaHotOnion.Repositories
{
  public class RoomRepository : MongoCrudRepository<Room>, IRoomRepository
  {
    public RoomRepository(IOptions<Settings> settings) : base(settings) { }

    public async Task<Room> GetByNameAsync(string name)
    {
      var filter = Builders<Room>.Filter.Eq(nameof(Room.Name), name);
      return await this.GetMongoCollection()
          .Find(filter)
          .FirstOrDefaultAsync();
    }
  }
}