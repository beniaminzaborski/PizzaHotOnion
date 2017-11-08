using System;

namespace PizzaHotOnion.DTOs
{
  public class OrdersApprovalDTO
  {
    public Guid Id { get; set; }
    public string Room { get; set; }
    public DateTime Day { get; set; }
    public int PizzaQuantity { get; set; }
  }
}
