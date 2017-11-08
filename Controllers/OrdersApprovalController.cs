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
  public class OrdersApprovalController : Controller
  {
    private readonly IOrdersApprovalRepository ordersApprovalRepository;
    private readonly IRoomRepository roomRepository;

    public OrdersApprovalController(
      IOrdersApprovalRepository ordersApprovalRepository,
      IRoomRepository roomRepository)
    {
      this.ordersApprovalRepository = ordersApprovalRepository;
      this.roomRepository = roomRepository;
    }

    [HttpGet("{room}", Name = "GetOrdersApproval")]
    public async Task<IActionResult> Get(string room)
    {
      if (string.IsNullOrEmpty(room))
        return BadRequest();

      var ordersApproval = await this.ordersApprovalRepository.GetByRoomDayAsync(room, DateTime.Now.Date);
      if (ordersApproval == null)
        return new ObjectResult(null);

      OrdersApprovalDTO ordersApprovalDTO = new OrdersApprovalDTO
      {
        Id = ordersApproval.Id,
        Day = ordersApproval.Day,
        PizzaQuantity = ordersApproval.PizzaQuantity,
        Room = ordersApproval.Room.Name
      };

      return new ObjectResult(ordersApprovalDTO);
    }

    [HttpPost("{room}")]
    public async Task<IActionResult> Create(string room, [FromBody]ApproveOrdersDTO approveOrdersDTO)
    {
      if (approveOrdersDTO == null)
        return BadRequest();

      if (approveOrdersDTO.PizzaQuantity < 1)
        return BadRequest("Pizza quantity has to be greater or equal 1");

      if (string.IsNullOrEmpty(approveOrdersDTO.Room))
        return BadRequest("Room is required");

      if (room != approveOrdersDTO.Room)
        return BadRequest("Incorect room");

      var roomEntity = await this.roomRepository.GetByNameAsync(approveOrdersDTO.Room);
      if (roomEntity == null)
        return BadRequest(string.Format("Room '{0}' does not exist", approveOrdersDTO.Room));

      DateTime orderDay = DateTime.Now.Date;

      OrdersApproval ordersApprovalEntity = await this.ordersApprovalRepository.GetByRoomDayAsync(approveOrdersDTO.Room, orderDay);
      if (ordersApprovalEntity != null)
        return BadRequest("Orders are approved");


      ordersApprovalEntity = new OrdersApproval(Guid.NewGuid());
      ordersApprovalEntity.Day = orderDay;
      ordersApprovalEntity.Room = roomEntity;
      ordersApprovalEntity.PizzaQuantity = approveOrdersDTO.PizzaQuantity;
      await this.ordersApprovalRepository.Add(ordersApprovalEntity);

      return CreatedAtRoute("GetOrdersApproval", new { room = ordersApprovalEntity.Room }, new { });
    }
  }
}