
using PizzaHotOnion.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PizzaHotOnion.Repositories
{
    public interface IOrderRepository : ICrudRepository<Order>
    {
        Task<IEnumerable<Order>> GetAllInRoom(string room);
    }
}