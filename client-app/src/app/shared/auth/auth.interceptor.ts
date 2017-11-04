import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    let token = localStorage.getItem('token');
    if (!token)
      return next.handle(req);

    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', `Bearer ${token}`)
    });

    return next.handle(authReq);
  }
}