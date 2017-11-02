using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Repositories;
using PizzaHotOnion.DTOs;
using Microsoft.AspNetCore.Authorization;

namespace PizzaHotOnion.Controllers
{
  //#if RELEASE
  [Authorize]
  //#endif
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class RoomsController : Controller
  {
    private readonly IRoomRepository roomRepository;
    private readonly IOrderRepository orderRepository;

    public RoomsController(
      IRoomRepository roomRepository,
      IOrderRepository orderRepository)
    {
      this.roomRepository = roomRepository;
      this.orderRepository = orderRepository;
    }

    [HttpGet]
    public async Task<IEnumerable<RoomDTO>> GetAll()
    {
      IList<RoomDTO> result = new List<RoomDTO>();

      var rooms = await this.roomRepository.GetAll();
      foreach (var room in rooms)
        result.Add(new RoomDTO { Name = room.Name });

      //return await Task.FromResult(result);
      return result;
    }

    [HttpGet("{name}", Name = "GetRoom")]
    public async Task<IActionResult> GetById(string name)
    {
      if (string.IsNullOrEmpty(name))
        return BadRequest();

      var room = await this.roomRepository.GetByNameAsync(name);
      if (room == null)
        return NotFound();

      return new ObjectResult(new RoomDTO { Name = room.Name });
    }

    [HttpPost]
    public async Task<IActionResult> Create([FromBody]RoomDTO roomDTO)
    {
      if (roomDTO == null || string.IsNullOrEmpty(roomDTO.Name))
        return BadRequest();

      var room = await this.roomRepository.GetByNameAsync(roomDTO.Name);
      if (room == null)
      {
        Room newRoom = new Room(Guid.NewGuid());
        newRoom.Name = roomDTO.Name;
        await this.roomRepository.Add(newRoom);

        return CreatedAtRoute("GetRoom", new { name = roomDTO.Name }, new { });
      }

      return new NoContentResult();
    }

    [HttpDelete("{name}")]
    public async Task<IActionResult> Delete(string name)
    {
      if (string.IsNullOrEmpty(name))
        return BadRequest();

      if(await this.orderRepository.CheckAnyOrderExists(name, DateTime.Now.Date))
        return BadRequest("Can not remove room because orders exist");

      Room room = await this.roomRepository.GetByNameAsync(name);
      if (room != null)
        await this.roomRepository.Remove(room.Id);

      return new NoContentResult();
    }
  }
}