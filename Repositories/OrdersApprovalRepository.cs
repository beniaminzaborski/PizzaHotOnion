
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;
using System.Threading.Tasks;
using System;

namespace PizzaHotOnion.Repositories
{
  public class OrdersApprovalRepository : MongoCrudRepository<OrdersApproval>, IOrdersApprovalRepository
  {
    public OrdersApprovalRepository(IOptions<Settings> settings) : base(settings) { }

    public async Task<OrdersApproval> GetByRoomDayAsync(string room, DateTime orderDay)
    {
      var filter = Builders<OrdersApproval>.Filter.Eq(nameof(Order.Room) + "." + nameof(Room.Name), room);
      filter = filter & (Builders<OrdersApproval>.Filter.Eq(nameof(Order.Day), orderDay.Date));
      return await this.GetMongoCollection()
          .Find(filter)
          .FirstOrDefaultAsync();
    }
  }
}