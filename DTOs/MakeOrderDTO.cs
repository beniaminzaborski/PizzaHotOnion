using System;

namespace PizzaHotOnion.DTOs
{
  public class MakeOrderDTO
  {
    public int Quantity { get; set; }
    public string Who { get; set; }
    public string Room { get; set; }
  }
}