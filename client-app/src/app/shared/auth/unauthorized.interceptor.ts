import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Router } from '@angular/router';

@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req)
      .catch(err => {
        if (err instanceof HttpErrorResponse) { 
          if (err.status === 401) {
            // JWT expired, go to login
            this.router.navigate(['/login']);
            return Observable.empty();
          }
        }

        return Observable.throw(err);
      });
  }
}