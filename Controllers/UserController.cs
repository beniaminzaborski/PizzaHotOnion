using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.DTOs;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly IUserRepository userRepository;

        public UserController(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterUserDTO registerUserDTO)
        {
            if (registerUserDTO == null)
                return BadRequest();

            if (string.IsNullOrWhiteSpace(registerUserDTO.Login))
                return BadRequest("Login is required");

            if (string.IsNullOrWhiteSpace(registerUserDTO.Email))
                return BadRequest("Login is required");

            if (string.IsNullOrWhiteSpace(registerUserDTO.Passwd))
                return BadRequest("Password is required");

            if (registerUserDTO.Passwd != registerUserDTO.Passwd2)
                return BadRequest("Passwords are not equals");

            User user = new User(Guid.NewGuid());
            user.Email = registerUserDTO.Email;
            user.Login = registerUserDTO.Login;
            user.Passwd = registerUserDTO.Passwd;

            // TODO: Check is login and email unique

            await this.userRepository.Add(user);

            return NoContent();
        }
    }
}