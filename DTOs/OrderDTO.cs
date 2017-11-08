using System;

namespace PizzaHotOnion.DTOs
{
  public class OrderDTO
  {
    public Guid Id { get; set; }
    public DateTime Day { get; set; }
    public int Quantity { get; set; }
    public string Who { get; set; }
    public string Room { get; set; }
    public bool IsApproved { get; set; }
  }
}