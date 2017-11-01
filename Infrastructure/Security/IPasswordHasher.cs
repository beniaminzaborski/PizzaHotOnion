namespace PizzaHotOnion.Infrastructure.Security
{
  public interface IPasswordHasher
  {
    string Hash(string password);

    string Hash(string login, string password);
  }
}