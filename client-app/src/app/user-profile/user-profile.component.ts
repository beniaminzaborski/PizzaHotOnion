import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent {
  
  constructor(
    public router: Router/*,
    private authenticationService: AuthenticationService*/) {
  }
}
