import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { JwtHelper } from './jwt-helper';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    if (!this.isLoggedAndNotExpired()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }

  private isLoggedAndNotExpired(): boolean {
    let token: string = localStorage.getItem('token');
    let jwtHelper = new JwtHelper();
    return token != null && !jwtHelper.isTokenExpired(token);
  }
}