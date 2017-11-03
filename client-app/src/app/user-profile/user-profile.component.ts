import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from '../shared/auth/change-password.model';
import { AuthenticationService } from '../shared/auth/authentication.service';

@Component({
  selector: 'app-root',
  providers: [
    AuthenticationService
  ],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  
  model: ChangePassword;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService) {
      this.model = new ChangePassword();
  }

  ngOnInit() {
    //this.titleService.setTitle(Config.title + " - Profil użytkownika");
    this.model.email = this.getUsername();
  }

  public changePassword() {
    this.authenticationService.changePassword(this.model)
      .subscribe(
      () => {
        alert("Your password was successfully changed.");
      },
      (error) => {
        alert("Unfortunately we could not change your password. Please try again.");
      }
      );
  }

  private getUsername(): string {
    return this.authenticationService.getLoggedUser();
  }
}
