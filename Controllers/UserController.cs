using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.DTOs;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class UserController : Controller
  {
    private readonly IUserRepository userRepository;
    private readonly IPasswordHasher passwordHasher;

    public UserController(
        IUserRepository userRepository,
        IPasswordHasher passwordHasher)
    {
      this.userRepository = userRepository;
      this.passwordHasher = passwordHasher;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody]RegisterUserDTO registerUserDTO)
    {
      if (registerUserDTO == null)
        return BadRequest();

      if (string.IsNullOrWhiteSpace(registerUserDTO.Email))
        return BadRequest("E-mail is required");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Passwd))
        return BadRequest("Password is required");

      if(registerUserDTO.Passwd.Length < 4)
        return BadRequest("Password is too short");

      if (await this.userRepository.CheckEmailExists(registerUserDTO.Email))
        return BadRequest("User with supplied e-mail exists yet");

      User user = new User(Guid.NewGuid());
      user.Email = registerUserDTO.Email;
      user.Passwd = passwordHasher.Hash(
          registerUserDTO.Email,
          registerUserDTO.Passwd
      );

      await this.userRepository.Add(user);

      return NoContent();
    }

    [HttpPost("changepassword")]
    public async Task<IActionResult> ChangePassword([FromBody]ChangePasswordDTO changePasswordDTO)
    {
      if (changePasswordDTO == null)
        return BadRequest();

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Email))
        return BadRequest("E-mail is required");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.CurrentPasswd))
        return BadRequest("Password is required");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Passwd))
        return BadRequest("Password is required");

      if (changePasswordDTO.Passwd != changePasswordDTO.Passwd2)
        return BadRequest("Passwords are not equals");

      if(changePasswordDTO.Passwd.Length < 4)
        return BadRequest("Password is too short");

      var user = await this.userRepository.GetByEmailAsync(changePasswordDTO.Email);
      if (user == null)
        return BadRequest("Incorrect e-mail or password");

      string currentHashedPasswd = this.passwordHasher.Hash(changePasswordDTO.Email, changePasswordDTO.CurrentPasswd);
      if (currentHashedPasswd != user.Passwd)
        return BadRequest("Incorrect e-mail or password");

      user.Passwd = passwordHasher.Hash(
          changePasswordDTO.Email,
          changePasswordDTO.Passwd
      );

      await this.userRepository.Update(user);

      return NoContent();
    }
  }
}