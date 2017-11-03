import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/auth/user.model';
import { AuthenticationService } from '../shared/auth/authentication.service';

@Component({
  selector: 'app-root',
  providers: [AuthenticationService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService) {
      this.user = new User();
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.authenticationService.login(this.user)
      .subscribe(
      () => {
        this.router.navigate(["/orders"]);
      },
      (error) => {
        alert("Unfortunately we could not find your account.");
      }
      );
  } 

  signUp() {
    this.authenticationService.register(this.user)
      .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => { alert("Unfortunately we were unable to create your account."); }
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    //let container = <View>this.container.nativeElement;
    //container.animate({
    //  backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
    //  duration: 200
    //});
  }
}
