using System;
using System.Runtime.Serialization;

namespace PizzaHotOnion
{
  public class BusinessException : Exception
  {
    public BusinessException() : base() { }

    public BusinessException(string message) : base(message) { }

    public BusinessException(string message, Exception innerException) : base(message, innerException) { }

    public BusinessException(SerializationInfo info, StreamingContext context) : base(info, context) { }
  }
}