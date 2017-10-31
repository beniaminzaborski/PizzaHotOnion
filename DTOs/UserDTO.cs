using System;

namespace PizzaHotOnion.DTOs
{
    public class RegisterUserDTO
    {
        public Guid Id { get; set; }

        public string Login { get; set; }

        public string Email { get; set; }

        public string Passwd { get; set; }

        public string Passwd2 { get; set; }
    }
}