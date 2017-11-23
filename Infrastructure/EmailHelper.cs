using System.Text.RegularExpressions;

namespace PizzaHotOnion.Infrastructure
{
  public static class EmailHelper
  {
    public static bool CheckIsValidEmail(string email)
    {
      return Regex.IsMatch(email, @"^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$");
    }
  }
}