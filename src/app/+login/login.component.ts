import { Component } from '@angular/core';
import { Router  } from '@angular/router';

import { LoginService } from './login.service';
import { SpinnerService, UserProfileService } from '../shared';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent {
  message: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private spinnerService: SpinnerService,
    private userProfileService: UserProfileService) {
    this.setMessage();
  }

  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  login() {
    this.spinnerService.show();
    this.message = 'Trying to log in ...';

    this.loginService.login().subscribe(() => {
      this.setMessage();
      if (this.userProfileService.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the dashboard
        this.router.navigate([ '/dashboard' ]);
      }
    });
  }

  logout() {
    this.spinnerService.show();
    this.loginService.logout();
    this.setMessage();
  }

  private setMessage() {
    this.message = 'Logged ' + (this.userProfileService.isLoggedIn ? 'in' : 'out');
    this.spinnerService.hide();
  }
}
