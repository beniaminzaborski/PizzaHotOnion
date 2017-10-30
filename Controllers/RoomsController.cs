using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Repositories;

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
        public async Task<IEnumerable<Room>> GetAll()
        {
            return await this.roomRepository.GetAll();
        }
        
        [HttpGet("{id}", Name = "GetRoom")]
        public async Task<IActionResult> GetById(Guid id)
        {
             if (id == Guid.Empty)
                return BadRequest();

            var room = await this.roomRepository.Get(id);
            if (room == null)
                return NotFound();

            return new ObjectResult(room);
        }
        
        [HttpPost]
        public async Task<IActionResult> Create([FromBody]Room room)
        {
            if (room == null)
                return BadRequest();

            if(room.Id == Guid.Empty)
                room.Id = Guid.NewGuid();

            /*var id = */await this.roomRepository.Add(room);
            
            //return CreatedAtRoute("GetRoom", new { id = id }, new { });
            return CreatedAtRoute("GetRoom", new { id = room.Id }, new { });
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Guid id, [FromBody]Room room)
        {
            if (room == null || room.Id != id)
                return BadRequest();

            await this.roomRepository.Update(room);

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
             if (id == Guid.Empty)
                return BadRequest();

            await this.roomRepository.Remove(id);

            return new NoContentResult();
        }
    }
}