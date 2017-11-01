using System;

namespace PizzaHotOnion.DTOs
{
  public class RegisterUserDTO
  {
    public string Login { get; set; }
    public string Email { get; set; }
    public string Passwd { get; set; }
    public string Passwd2 { get; set; }
  }
}