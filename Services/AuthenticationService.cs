using System;
using System.Threading.Tasks;
using PizzaHotOnion.DTOs;
using PizzaHotOnion.Entities;
using PizzaHotOnion.Infrastructure.Security;
using PizzaHotOnion.Repositories;

namespace PizzaHotOnion.Services
{
  public class AuthenticationService : IAuthenticationService
  {
    private readonly IUserRepository userRepository;
    private readonly IPasswordHasher passwordHasher;

    public AuthenticationService(
      IUserRepository userRepository,
      IPasswordHasher passwordHasher)
    {
      this.userRepository = userRepository;
      this.passwordHasher = passwordHasher;
    }

    public async Task<bool> SignIn(string login, string password)
    {
      var user = await this.userRepository.GetByEmailAsync(login);
      if (user == null)
        return false;

      var hashedPassword = this.passwordHasher.Hash(login, password);
      if (user.Passwd == hashedPassword)
        return true;

      return false;
    }

    public async Task SignUp(RegisterUserDTO registerUserDTO)
    {
      if (registerUserDTO == null)
        throw new BusinessException("Cannot register user because data is empty");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Email))
        throw new BusinessException("Cannot register user because e-mail is empty");

      if (string.IsNullOrWhiteSpace(registerUserDTO.Passwd))
        throw new BusinessException("Cannot register user because password is empty");

      if(registerUserDTO.Passwd.Length < 4)
        throw new BusinessException("Cannot register user because password is too short");

      if (await this.userRepository.CheckEmailExists(registerUserDTO.Email))
        throw new BusinessException("Cannot register user because user with supplied e-mail exists yet");

      User user = new User(Guid.NewGuid());
      user.Email = registerUserDTO.Email;
      user.Passwd = passwordHasher.Hash(
          registerUserDTO.Email,
          registerUserDTO.Passwd
      );

      await this.userRepository.Add(user);
    }

    public async Task ChangePassword(ChangePasswordDTO changePasswordDTO)
    {
      if (changePasswordDTO == null)
        throw new BusinessException("Cannot change password because data is empty");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Email))
        throw new BusinessException("Cannot change password because e-mail is empty");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.CurrentPasswd))
        throw new BusinessException("Cannot change password because password is empty");

      if (string.IsNullOrWhiteSpace(changePasswordDTO.Passwd))
        throw new BusinessException("Cannot change password because password is empty");

      if (changePasswordDTO.Passwd != changePasswordDTO.Passwd2)
        throw new BusinessException("Cannot change password because passwords are not equals");

      if(changePasswordDTO.Passwd.Length < 4)
        throw new BusinessException("Cannot change password because password is too short");

      var user = await this.userRepository.GetByEmailAsync(changePasswordDTO.Email);
      if (user == null)
        throw new BusinessException("Cannot change password because e-mail or password are incorrect");

      string currentHashedPasswd = this.passwordHasher.Hash(changePasswordDTO.Email, changePasswordDTO.CurrentPasswd);
      if (currentHashedPasswd != user.Passwd)
        throw new BusinessException("Cannot change password because e-mail or password are incorrect");

      user.Passwd = passwordHasher.Hash(
          changePasswordDTO.Email,
          changePasswordDTO.Passwd
      );

      await this.userRepository.Update(user);
    }
  }
}