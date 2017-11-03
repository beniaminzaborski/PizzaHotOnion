import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/auth/authentication.service';

@Component({
  selector: 'app-root',
  providers: [
    AuthenticationService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public router: Router,
    private authenticationService: AuthenticationService) {
  }

  public logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
