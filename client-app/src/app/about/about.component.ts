import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  
  constructor(
    public router: Router/*,
    private authenticationService: AuthenticationService*/) {
  }
}
