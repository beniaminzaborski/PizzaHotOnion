using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using PizzaHotOnion.DTOs;

namespace PizzaHotOnion
{
  public class MessageHub : Hub
  {
    public Task Send(MessageDTO message)
    {
      return Clients.All.SendAsync("Send", message);
    }
  }
}