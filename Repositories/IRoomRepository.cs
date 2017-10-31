
using System.Threading.Tasks;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
  public interface IRoomRepository : ICrudRepository<Room>
  {
    Task<Room> GetByNameAsync(string name);
  }
}