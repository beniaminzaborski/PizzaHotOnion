import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './orders.component.html'
})
export class OrdersComponent {
  
  constructor(
    public router: Router/*,
    private authenticationService: AuthenticationService*/) {
  }
}
