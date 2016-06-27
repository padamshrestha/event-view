import { Component }   from '@angular/core';
import { Router }      from '@angular/router';

import { AuthService } from '../auth';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the dashboard
        this.router.navigate(['/dashboard']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
