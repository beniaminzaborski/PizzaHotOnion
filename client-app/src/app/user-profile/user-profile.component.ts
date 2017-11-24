import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangePassword } from '../shared/auth/change-password.model';
import { AuthenticationService } from '../shared/auth/authentication.service';
import { Observable } from 'rxjs';
import { UserProfile } from '../shared/auth/user-profile.model';

@Component({
  selector: 'app-root',
  providers: [
    AuthenticationService
  ],
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {
  
  model: ChangePassword;
  userProfileModel: UserProfile;

  constructor(
    public router: Router,
    private authenticationService: AuthenticationService) {
      this.model = new ChangePassword();
      this.userProfileModel = new UserProfile('');
  }

  ngOnInit() {
    //this.titleService.setTitle(Config.title + " - Profil użytkownika");
    this.model.email = this.getUsername();
    this.authenticationService.getUserProfile(this.model.email)
      .subscribe(profile => this.userProfileModel = profile);
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

  public saveProfile() {
    this.authenticationService.editUserProfile(this.userProfileModel)
      .subscribe();
  }

  private getUsername(): string {
    return this.authenticationService.getLoggedUser();
  }
}
