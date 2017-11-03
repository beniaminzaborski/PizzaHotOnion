import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class JsonContentInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    const jsonReq = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });

    return next.handle(jsonReq);
  }
}