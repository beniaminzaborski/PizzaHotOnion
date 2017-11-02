
using Microsoft.Extensions.Options;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using MongoDB.Driver;
using System;

namespace PizzaHotOnion.Repositories
{
  public class OrderRepository : MongoCrudRepository<Order>, IOrderRepository
  {
    public OrderRepository(IOptions<Settings> settings) : base(settings) { }

    public async Task<IEnumerable<Order>> GetAllInRoom(string room)
    {
      var filter = Builders<Order>.Filter.Eq(nameof(Order.Room) + '.' + nameof(Room.Name), room);
      return await this.GetMongoCollection()
          .Find(filter)
          .ToListAsync();
    }

    public async Task<bool> CheckOrderExists(string room, DateTime orderDay, string who)
    {
      var filter = Builders<Order>.Filter.Eq(nameof(Order.Room) + '.' + nameof(Room.Name), room);
      filter = filter & (Builders<Order>.Filter.Eq(nameof(Order.Day), orderDay));
      filter = filter & (Builders<Order>.Filter.Eq(nameof(Order.Who) + '.' + nameof(User.Login), who));
      return await this.GetMongoCollection()
          .Find(filter)
          .AnyAsync();
    }

    public async Task<bool> CheckAnyOrderExists(string room, DateTime orderDay)
    {
      var filter = Builders<Order>.Filter.Eq(nameof(Order.Room) + '.' + nameof(Room.Name), room);
      filter = filter & (Builders<Order>.Filter.Gte(nameof(Order.Day), orderDay));
      return await this.GetMongoCollection()
          .Find(filter)
          .AnyAsync();
    }
  }
}