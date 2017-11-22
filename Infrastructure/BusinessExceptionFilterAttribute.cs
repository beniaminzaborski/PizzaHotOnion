using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace PizzaHotOnion.Infrastructure
{
  public class BusinessExceptionFilterAttribute : ExceptionFilterAttribute
  {
    public override void OnException(ExceptionContext context)
    {
      if (context.Exception is BusinessException)
      {
        context.Result = new ContentResult
        {
          Content = context.Exception.Message,
          ContentType = "text/plain",
          StatusCode = (int?)HttpStatusCode.InternalServerError
        };
      }
      else
        base.OnException(context);
    }
  }
}