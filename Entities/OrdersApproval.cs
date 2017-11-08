using System;

namespace PizzaHotOnion.Entities
{
  public class OrdersApproval : Entity
  {
    public OrdersApproval(Guid id) : base(id) { }

    public Room Room { get; set; }
    public DateTime Day { get; set; }
    public int PizzaQuantity { get; set; }
  }
}