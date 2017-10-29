using System;

namespace PizzaHotOnion.Entities
{
    public class User : Entity
    {
        public User(Guid id) : base(id) { }

        public string Login { get; set; }

        public string Email { get; set; }
    }
}