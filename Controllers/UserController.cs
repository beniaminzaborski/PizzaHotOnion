using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PizzaHotOnion.DTOs;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Infrastructure;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;
using PizzaHotOnion.Services;

namespace PizzaHotOnion.Controllers
{
  [BusinessExceptionFilter]
  [Produces("application/json")]
  [Route("api/[controller]")]
  public class UserController : Controller
  {
    private readonly IAuthenticationService authenticationService;

    public UserController(IAuthenticationService authenticationService)
    {
      this.authenticationService = authenticationService;
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register([FromBody]RegisterUserDTO registerUserDTO)
    {
      await this.authenticationService.SignUp(registerUserDTO);
      return NoContent();
    }

    [HttpPost("changepassword")]
    public async Task<IActionResult> ChangePassword([FromBody]ChangePasswordDTO changePasswordDTO)
    {
      await this.authenticationService.ChangePassword(changePasswordDTO);
      return NoContent();
    }
  }
}