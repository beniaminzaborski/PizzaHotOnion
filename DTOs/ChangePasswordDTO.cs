using System;

namespace PizzaHotOnion.DTOs
{
  public class ChangePasswordDTO
  {
    public string Email { get; set; }
    public string CurrentPasswd { get; set; }
    public string Passwd { get; set; }
    public string Passwd2 { get; set; }
  }
}