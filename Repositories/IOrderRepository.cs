
using PizzaHotOnion.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace PizzaHotOnion.Repositories
{
  public interface IOrderRepository : ICrudRepository<Order>
  {
    Task<IEnumerable<Order>> GetAllInRoom(string room, DateTime orderDay);
    Task<bool> CheckOrderExists(string room, DateTime orderDay, string who);
    Task<bool> CheckAnyOrderExists(string room, DateTime orderDay);
    Task<Order> GetOrder(string room, DateTime orderDay, string who);
  }
}