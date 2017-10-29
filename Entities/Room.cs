using System;

namespace PizzaHotOnion.Entities
{
    public class Room : Entity
    {
        public Room(Guid id) : base(id) { }

        public string Name { get; set; }
    }
}