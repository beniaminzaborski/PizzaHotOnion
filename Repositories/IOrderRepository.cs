
using PizzaHotOnion.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace PizzaHotOnion.Repositories
{
  public interface IOrderRepository : ICrudRepository<Order>
  {
    Task<IEnumerable<Order>> GetAllInRoom(string room);
    Task<bool> CheckOrderExists(string room, DateTime orderDay, string who);
  }
}