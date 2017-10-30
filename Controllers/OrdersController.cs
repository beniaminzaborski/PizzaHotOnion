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
    public class OrdersController : Controller
    {
        private readonly IOrderRepository orderRepository;

        public OrdersController(IOrderRepository orderRepository)
        {
            this.orderRepository = orderRepository;
        }

        [HttpGet("{room}")]
        public async Task<IEnumerable<Order>> GetAll(string room)
        {
            return await this.orderRepository.GetAllInRoom(room);
        }

        [HttpGet("{id}", Name = "GetOrder")]
        public async Task<IActionResult> GetById(Guid id)
        {
             if (id == Guid.Empty)
                return BadRequest();

            var order = await this.orderRepository.Get(id);
            if (order == null)
                return NotFound();

            return new ObjectResult(order);
        }

        [HttpPost("{room}")]
        public async Task<IActionResult> Create(string room, [FromBody]Order order)
        {
            if (order == null)
                return BadRequest();

            if(order.Id == Guid.Empty)
                order.Id = Guid.NewGuid();

            order.Room = room;

            /*var id = */await this.orderRepository.Add(order);
            
            return CreatedAtRoute("GetOrder", new { id = order.Id }, new { });
        }

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
    }
}