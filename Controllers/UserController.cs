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

      if (string.IsNullOrWhiteSpace(registerUserDTO.Login))
        return BadRequest("Login is required");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Email))
        return BadRequest("Login is required");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Passwd))
        return BadRequest("Password is required");

      if (registerUserDTO.Passwd != registerUserDTO.Passwd2)
        return BadRequest("Passwords are not equals");

      if(registerUserDTO.Passwd.Length < 4)
        return BadRequest("Password is too short");

      if (await this.userRepository.CheckLoginExists(registerUserDTO.Login)
          || await this.userRepository.CheckEmailExists(registerUserDTO.Email))
        return BadRequest("User with supplied login or e-mail exists yet");

      User user = new User(Guid.NewGuid());
      user.Email = registerUserDTO.Email;
      user.Login = registerUserDTO.Login;
      user.Passwd = passwordHasher.Hash(
          registerUserDTO.Login,
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

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Login))
        return BadRequest("Login is required");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.CurrentPasswd))
        return BadRequest("Password is required");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Passwd))
        return BadRequest("Password is required");

      if (changePasswordDTO.Passwd != changePasswordDTO.Passwd2)
        return BadRequest("Passwords are not equals");

      if(changePasswordDTO.Passwd.Length < 4)
        return BadRequest("Password is too short");

      var user = await this.userRepository.GetByLoginAsync(changePasswordDTO.Login);
      if (user == null)
        return BadRequest("Incorrect login or password");

      string currentHashedPasswd = this.passwordHasher.Hash(changePasswordDTO.Login, changePasswordDTO.CurrentPasswd);
      if (currentHashedPasswd != user.Passwd)
        return BadRequest("Incorrect login or password");

      user.Passwd = passwordHasher.Hash(
          changePasswordDTO.Login,
          changePasswordDTO.Passwd
      );

      await this.userRepository.Update(user);

      return NoContent();
    }
  }
}