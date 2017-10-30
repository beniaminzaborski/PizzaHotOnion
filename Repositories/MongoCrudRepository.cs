using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using PizzaHotOnion.Configuration;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Repositories
{
    public abstract class MongoCrudRepository<TEntity> : ICrudRepository<TEntity>
        where TEntity : Entity
    {
        private readonly IMongoDatabase database = null;

        public MongoCrudRepository(IOptions<Settings> settings)
        {
            var client = new MongoClient(settings.Value.ConnectionString);
            if (client != null)
                database = client.GetDatabase(settings.Value.Database);
        }

        protected IMongoCollection<TEntity> GetMongoCollection()
        {
            return this.database
                .GetCollection<TEntity>(typeof(TEntity).Name);
        }

        public async Task<IEnumerable<TEntity>> GetAll()
        {
            return await this.GetMongoCollection()
                .Find(_ => true)
                .ToListAsync();
        }

        public async Task<TEntity> Get(Guid id)
        {
            var filter = Builders<TEntity>.Filter.Eq(nameof(Entity.Id), id);
            return await this.GetMongoCollection()
                .Find(filter)
                .FirstOrDefaultAsync();
        }

        public async Task Add(TEntity entity)
        {
            await this.GetMongoCollection()
                .InsertOneAsync(entity);
        }

        public async Task Update(TEntity entity)
        {
            await this.GetMongoCollection()
                .ReplaceOneAsync(
                    n => n.Id.Equals(entity.Id),
                    entity,
                    new UpdateOptions { IsUpsert = true }
                );
        }

        public async Task Remove(Guid id)
        {
            var filter = Builders<TEntity>.Filter.Eq(nameof(Entity.Id), id);
            await this.GetMongoCollection()
                .DeleteManyAsync(filter);
        }
    }
}