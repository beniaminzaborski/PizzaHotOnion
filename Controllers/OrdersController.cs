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
          Who = order.Who.Login,
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
        Who = order.Who.Login,
        Room = order.Room.Name
      };

      return new ObjectResult(orderDTO);
    }

    [HttpPost("{room}")]
    public async Task<IActionResult> Create(string room, [FromBody]OrderDTO orderDTO)
    {
      if (orderDTO == null)
        return BadRequest();

      if (orderDTO.Id == Guid.Empty)
        orderDTO.Id = Guid.NewGuid();

      if (orderDTO.Quantity < 1)
        return BadRequest("Quantity has to be greater or equal 1");

      if (orderDTO.Day.Date < DateTime.Now.Date)
        return BadRequest("Day is invalid");

      if (string.IsNullOrEmpty(orderDTO.Room))
        return BadRequest("Room is required");

      if (string.IsNullOrEmpty(orderDTO.Who))
        return BadRequest("Login is required");

      var roomEntity = await this.roomRepository.GetByNameAsync(orderDTO.Room);
      if (roomEntity == null)
        return BadRequest(string.Format("Room '{0}' does not exist", orderDTO.Room));

      var userEntity = await this.userRepository.GetByLoginAsync(orderDTO.Who);
      if (userEntity == null)
        return BadRequest(string.Format("User '{0}' does not exist", orderDTO.Who));

      Order orderEntity = new Order(Guid.NewGuid());
      orderEntity.Day = orderDTO.Day.Date;
      orderEntity.Quantity = orderDTO.Quantity;
      orderEntity.Who = userEntity;
      orderEntity.Room = roomEntity;

      await this.orderRepository.Add(orderEntity);

      return CreatedAtRoute("GetOrder", new { id = orderDTO.Id }, new { });
    }

    /*
    [HttpPatch("{room}/{id}")]
    public async Task<IActionResult> Update(string room, Guid id, [FromBody]Order order)
    {
        if (order == null || order.Id != id)
            return BadRequest();

        Order savedOrder = await this.orderRepository.Get(id); 
        if(savedOrder == null)
            return BadRequest();

        savedOrder.Quantity = order.Quantity;

        await this.orderRepository.Update(savedOrder);

        return new NoContentResult();
    }

    [HttpDelete("{room}/{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
         if (id == Guid.Empty)
            return BadRequest();

        await this.orderRepository.Remove(id);

        return new NoContentResult();
    }
    */
  }
}