import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './rooms.component.html'
})
export class RoomsComponent {
  
  constructor(
    public router: Router/*,
    private authenticationService: AuthenticationService*/) {
  }
}
