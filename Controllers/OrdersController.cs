using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.DTOs;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class OrdersController : Controller
  {
    private readonly IOrderRepository orderRepository;
    private readonly IRoomRepository roomRepository;
    private readonly IUserRepository userRepository;

    public OrdersController(
        IOrderRepository orderRepository,
        IRoomRepository roomRepository,
        IUserRepository userRepository)
    {
      this.orderRepository = orderRepository;
      this.roomRepository = roomRepository;
      this.userRepository = userRepository;
    }

    [HttpGet("{room}")]
    public async Task<IEnumerable<OrderDTO>> GetAll(string room)
    {
      IList<OrderDTO> result = new List<OrderDTO>();

      var orders = await this.orderRepository.GetAllInRoom(room);

      foreach (var order in orders)
        result.Add(new OrderDTO
        {
          Id = order.Id,
          Day = order.Day,
          Who = order.Who.Email,
          Quantity = order.Quantity,
          Room = order.Room.Name
        });

      return result;
    }

    [HttpGet("details/{id}", Name = "GetOrder")]
    public async Task<IActionResult> GetById(Guid id)
    {
      if (id == Guid.Empty)
        return BadRequest();

      var order = await this.orderRepository.Get(id);
      if (order == null)
        return NotFound();

      OrderDTO orderDTO = new OrderDTO
      {
        Id = order.Id,
        Day = order.Day,
        Quantity = order.Quantity,
        Who = order.Who.Email,
        Room = order.Room.Name
      };

      return new ObjectResult(orderDTO);
    }

    [HttpPost("{room}")]
    public async Task<IActionResult> Create(string room, [FromBody]MakeOrderDTO orderDTO)
    {
      if (orderDTO == null)
        return BadRequest();

      if (orderDTO.Quantity < 1)
        return BadRequest("Quantity has to be greater or equal 1");

      if (string.IsNullOrEmpty(orderDTO.Room))
        return BadRequest("Room is required");

      if (string.IsNullOrEmpty(orderDTO.Who))
        return BadRequest("Login is required");

      var roomEntity = await this.roomRepository.GetByNameAsync(orderDTO.Room);
      if (roomEntity == null)
        return BadRequest(string.Format("Room '{0}' does not exist", orderDTO.Room));

      var userEntity = await this.userRepository.GetByEmailAsync(orderDTO.Who);
      if (userEntity == null)
        return BadRequest(string.Format("User '{0}' does not exist", orderDTO.Who));

      DateTime orderDay = DateTime.Now.Date;

      Order orderEntity = await this.orderRepository.GetOrder(orderDTO.Room, orderDay, orderDTO.Who);
      if(orderEntity == null)
      {
        orderEntity = new Order(Guid.NewGuid());
        orderEntity.Day = orderDay;
        orderEntity.Who = userEntity;
        orderEntity.Room = roomEntity;
        orderEntity.Quantity = orderDTO.Quantity;
        await this.orderRepository.Add(orderEntity);
      } else {
        orderEntity.Quantity = orderDTO.Quantity;
        await this.orderRepository.Update(orderEntity);
      }
    
      return CreatedAtRoute("GetOrder", new { id = orderEntity.Id }, new { });
    }

    [HttpPatch("{room}/{id}")]
    public async Task<IActionResult> Update(string room, Guid id, [FromBody]OrderDTO orderDTO)
    {
      if (orderDTO == null)
        return BadRequest();

      if (orderDTO.Id == null || orderDTO.Id == Guid.Empty || orderDTO.Id != id)
        return BadRequest();

      if (string.IsNullOrWhiteSpace(orderDTO.Room) || orderDTO.Room != room)
        return BadRequest();

      if (orderDTO.Quantity < 1)
        return BadRequest("Quantity has to be greater or equal 1");

      Order orderEntity = await this.orderRepository.Get(id);
      if (orderEntity == null)
        return BadRequest();

      if(orderEntity.Room.Name != room)
        return BadRequest();

      orderEntity.Quantity = orderDTO.Quantity;

      await this.orderRepository.Update(orderEntity);

      return new NoContentResult();
    }

    [HttpDelete("{room}/{id}")]
    public async Task<IActionResult> Delete(string room, Guid id)
    {
         if (id == Guid.Empty)
            return BadRequest();

        var order = await this.orderRepository.Get(id);
        if(order == null)
          return BadRequest();

        if(order.Room.Name != room)
          return BadRequest();

        await this.orderRepository.Remove(id);

        return new NoContentResult();
    }
  }
}