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
        return BadRequest("Cannot register user because data is empty");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Email))
        return BadRequest("Cannot register user because e-mail is empty");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Passwd))
        return BadRequest("Cannot register user because password is empty");

      if(registerUserDTO.Passwd.Length < 4)
        return BadRequest("Cannot register user because password is too short");

      if (await this.userRepository.CheckEmailExists(registerUserDTO.Email))
        return BadRequest("Cannot register user because user with supplied e-mail exists yet");

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
        return BadRequest("Cannot change password because data is empty");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Email))
        return BadRequest("Cannot change password because e-mail is empty");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.CurrentPasswd))
        return BadRequest("Cannot change password because password is empty");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Passwd))
        return BadRequest("Cannot change password because password is empty");

      if (changePasswordDTO.Passwd != changePasswordDTO.Passwd2)
        return BadRequest("Cannot change password because passwords are not equals");

      if(changePasswordDTO.Passwd.Length < 4)
        return BadRequest("Cannot change password because password is too short");

      var user = await this.userRepository.GetByEmailAsync(changePasswordDTO.Email);
      if (user == null)
        return BadRequest("Cannot change password because e-mail or password are incorrect");

      string currentHashedPasswd = this.passwordHasher.Hash(changePasswordDTO.Email, changePasswordDTO.CurrentPasswd);
      if (currentHashedPasswd != user.Passwd)
        return BadRequest("Cannot change password because e-mail or password are incorrect");

      user.Passwd = passwordHasher.Hash(
          changePasswordDTO.Email,
          changePasswordDTO.Passwd
      );

      await this.userRepository.Update(user);

      return NoContent();
    }
  }
}