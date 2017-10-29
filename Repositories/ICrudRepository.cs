using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PizzaHotOnion.Entities;

namespace PizzaHotOnion.Repositories
{
    public interface ICrudRepository<TEntity>
        where TEntity: Entity
    {
        Task<IEnumerable<TEntity>> GetAll();

        Task<TEntity> Get(Guid id);

        Task Add(TEntity entity);

        Task Update(TEntity entity);

        Task Remove(string id);
    }
}