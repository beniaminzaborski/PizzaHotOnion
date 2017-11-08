
using System;
using System.Threading.Tasks;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
  public interface IOrdersApprovalRepository : ICrudRepository<OrdersApproval>
  {
    Task<OrdersApproval> GetByRoomDayAsync(string room, DateTime orderDay);
  }
}
