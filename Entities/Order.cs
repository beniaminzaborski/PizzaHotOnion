using System;

namespace PizzaHotOnion.Entities
{
    public class Order : Entity
    {
        public Order(Guid id) : base(id) { }

        public DateTime Day { get; set; }

        public int Quantity { get; set; }

        public User Who { get; set; }

        public string Room { get; set; }
    }
}