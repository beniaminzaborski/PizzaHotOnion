using System;

namespace PizzaHotOnion.Entities
{
  public class User : Entity
  {
    public User(Guid id) : base(id) { }
    public string Email { get; set; }
    public string Passwd { get; set; }
  }
}