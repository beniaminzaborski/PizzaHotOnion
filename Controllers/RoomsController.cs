using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Repositories;
using PizzaHotOnion.DTOs;

namespace PizzaHotOnion.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class RoomsController : Controller
  {
    private readonly IRoomRepository roomRepository;

    public RoomsController(IRoomRepository roomRepository)
    {
      this.roomRepository = roomRepository;
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

        return CreatedAtRoute("GetRoom", new { id = roomDTO.Name }, new { });
      }

      return new NoContentResult();
    }

    [HttpDelete("{name}")]
    public async Task<IActionResult> Delete(string name)
    {
      if (string.IsNullOrEmpty(name))
        return BadRequest();

      Room room = await this.roomRepository.GetByNameAsync(name);
      if(room != null)
        await this.roomRepository.Remove(room.Id);

      return new NoContentResult();
    }
  }
}