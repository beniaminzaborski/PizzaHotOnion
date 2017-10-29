
using Microsoft.Extensions.Options;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
    public class RoomRepository : MongoCrudRepository<Room>, IRoomRepository
    {
        public RoomRepository(IOptions<Settings> settings) : base(settings) {}
    }
}