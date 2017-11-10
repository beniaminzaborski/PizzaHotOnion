using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
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
    private readonly IOrdersApprovalRepository ordersApprovalRepository;
    private readonly IHubContext<MessageHub> messageHubContext;

    public OrdersController(
        IOrderRepository orderRepository,
        IRoomRepository roomRepository,
        IUserRepository userRepository,
        IOrdersApprovalRepository ordersApprovalRepository,
        IHubContext<MessageHub> messageHubContext)
    {
      this.orderRepository = orderRepository;
      this.roomRepository = roomRepository;
      this.userRepository = userRepository;
      this.ordersApprovalRepository = ordersApprovalRepository;
      this.messageHubContext = messageHubContext;
    }

    [HttpGet("{room}", Name = "GetAll")]
    public async Task<IEnumerable<OrderDTO>> GetAll(string room)
    {
      IList<OrderDTO> result = new List<OrderDTO>();
      DateTime orderDay = DateTime.Now.Date;

      var orders = await this.orderRepository.GetAllInRoom(room, orderDay);
      var ordersApproval = await this.ordersApprovalRepository.GetByRoomDayAsync(room, orderDay);

      foreach (var order in orders)
        result.Add(new OrderDTO
        {
          Id = order.Id,
          Day = order.Day,
          Who = order.Who.Email,
          Quantity = order.Quantity,
          Room = order.Room.Name,
          IsApproved = ordersApproval != null
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
        return BadRequest("Cannot add order because data is empty");

      if (orderDTO.Quantity < 1)
        return BadRequest("Cannot add order because quantity has to be greater or equal 1");

      if (string.IsNullOrEmpty(orderDTO.Room))
        return BadRequest("Cannot add order because room name is required");

      if (string.IsNullOrEmpty(orderDTO.Who))
        return BadRequest("Cannot add order because login is empty");

      DateTime orderDay = DateTime.Now.Date;

      if (await this.ordersApprovalRepository.CheckExistsByRoomDayAsync(room, orderDay))
        return BadRequest("Cannot add order because orders are approved");

      var roomEntity = await this.roomRepository.GetByNameAsync(orderDTO.Room);
      if (roomEntity == null)
        return BadRequest(string.Format("Cannot add order because room '{0}' does not exist", orderDTO.Room));

      var userEntity = await this.userRepository.GetByEmailAsync(orderDTO.Who);
      if (userEntity == null)
        return BadRequest(string.Format("Cannot add order because user '{0}' does not exist", orderDTO.Who));

      Order orderEntity = await this.orderRepository.GetOrder(orderDTO.Room, orderDay, orderDTO.Who);
      if (orderEntity == null)
      {
        orderEntity = new Order(Guid.NewGuid());
        orderEntity.Day = orderDay;
        orderEntity.Who = userEntity;
        orderEntity.Room = roomEntity;
        orderEntity.Quantity = orderDTO.Quantity;
        await this.orderRepository.Add(orderEntity);
      }
      else
      {
        orderEntity.Quantity = orderDTO.Quantity;
        await this.orderRepository.Update(orderEntity);
      }

      //Broadcast message to client  
      await this.messageHubContext.Clients.All
        .InvokeAsync(
          "send",
          new MessageDTO { Operation = OperationType.SliceGrabbed, Context = orderDTO.Room }
        );

      return CreatedAtRoute("GetOrder", new { id = orderEntity.Id }, new { });
    }

    [HttpPatch("{room}/{id}")]
    public async Task<IActionResult> Update(string room, Guid id, [FromBody]OrderDTO orderDTO)
    {
      if (orderDTO == null)
        return BadRequest("Cannot update order because data is empty");

      if (orderDTO.Id == null || orderDTO.Id == Guid.Empty || orderDTO.Id != id)
        return BadRequest("Cannot update order because data is empty");

      if (string.IsNullOrWhiteSpace(orderDTO.Room) || orderDTO.Room != room)
        return BadRequest("Cannot update order because room name is incorrect");

      if (await this.ordersApprovalRepository.CheckExistsByRoomDayAsync(room, DateTime.Now.Date))
        return BadRequest("Cannot update order because orders are approved");

      if (orderDTO.Quantity < 1)
        return BadRequest("Cannot update order because quantity has to be greater or equal 1");

      Order orderEntity = await this.orderRepository.Get(id);
      if (orderEntity == null)
        return BadRequest("Cannot update order because order does not exist");

      if (orderEntity.Room.Name != room)
        return BadRequest("Cannot update order because room name is incorrect");

      orderEntity.Quantity = orderDTO.Quantity;

      await this.orderRepository.Update(orderEntity);

      //Broadcast message to client  
      await this.messageHubContext.Clients.All
        .InvokeAsync(
          "send",
          new MessageDTO { Operation = OperationType.SliceGrabbed, Context = orderDTO.Room }
        );

      return new NoContentResult();
    }

    [HttpDelete("{room}/{id}")]
    public async Task<IActionResult> Delete(string room, Guid id)
    {
      if (id == Guid.Empty)
        return BadRequest("Cannot delete order because it does not exists");

      if (await this.ordersApprovalRepository.CheckExistsByRoomDayAsync(room, DateTime.Now.Date))
        return BadRequest("Cannot delete order because it is approved");

      var order = await this.orderRepository.Get(id);
      if (order == null)
        return BadRequest("Cannot delete order because it does not exist");

      if (order.Room.Name != room)
        return BadRequest("Cannot delete order because room name is incorrect");

      await this.orderRepository.Remove(id);

      //Broadcast message to client  
      await this.messageHubContext.Clients.All
        .InvokeAsync(
          "send",
          new MessageDTO { Operation = OperationType.SliceCancelled, Context = room }
        );

      return new NoContentResult();
    }

    [HttpPost("{room}/approve")]
    public async Task<IActionResult> Approve(string room/*, [FromBody]ApproveOrdersDTO approveOrdersDTO*/)
    {
      // if (approveOrdersDTO == null)
      //   return BadRequest();

      // if (approveOrdersDTO.PizzaQuantity < 1)
      //   return BadRequest("Pizza quantity has to be greater or equal 1");

      if (string.IsNullOrEmpty(room))
        return BadRequest("Cannot approve orders because room name is incorrect");

      // if (room != approveOrdersDTO.Room)
      //   return BadRequest("Incorect room");

      var roomEntity = await this.roomRepository.GetByNameAsync(room);
      if (roomEntity == null)
        return BadRequest(string.Format("Cannot approve orders because room '{0}' does not exist", room));

      DateTime orderDay = DateTime.Now.Date;

      if (await this.ordersApprovalRepository.CheckExistsByRoomDayAsync(room, orderDay))
        return BadRequest("Cannot approve orders because orders are approved");

      var orders = await this.orderRepository.GetAllInRoom(room, orderDay);
      int slices = orders.Sum(o => o.Quantity);
      int pizzas = (int)Math.Ceiling((decimal)slices / 8);

      OrdersApproval ordersApprovalEntity = new OrdersApproval(Guid.NewGuid());
      ordersApprovalEntity.Day = orderDay;
      ordersApprovalEntity.Room = roomEntity;
      ordersApprovalEntity.PizzaQuantity = pizzas;
      await this.ordersApprovalRepository.Add(ordersApprovalEntity);

      //Broadcast message to client  
      await this.messageHubContext.Clients.All
        .InvokeAsync(
          "send",
          new MessageDTO { Operation = OperationType.OrdersApproved, Context = room }
        );

      return CreatedAtRoute("GetAll", new { room = room }, new { });
    }
  }
}