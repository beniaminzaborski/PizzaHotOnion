
using Microsoft.Extensions.Options;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
    public class OrderRepository : MongoCrudRepository<Order>, IOrderRepository
    {
        public OrderRepository(IOptions<Settings> settings) : base(settings) {}
    }
}