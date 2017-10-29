using System;
using MongoDB.Bson.Serialization.Attributes;

namespace PizzaHotOnion.Entities 
{
    public abstract class Entity
    {
        public Entity(Guid id)
        {
            this.Id = id;
        }

        [BsonId]
        public Guid Id { get; protected set; }
    }
}
