
using Microsoft.Extensions.Options;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace PizzaHotOnion.Repositories
{
    public class OrderRepository : MongoCrudRepository<Order>, IOrderRepository
    {
        public OrderRepository(IOptions<Settings> settings) : base(settings) {}

        public async Task<IEnumerable<Order>> GetAllInRoom(string room)
        {
            var filter = Builders<Order>.Filter.Eq(nameof(Order.Room) + '.' + nameof(Room.Name), room);
            return await this.GetMongoCollection()
                .Find(filter)
                .ToListAsync();
        }
    }
}