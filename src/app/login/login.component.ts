import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { LoginService } from './login.service';
import { ToastService } from '../../app/shared';
import { UserProfileService } from '../shared';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnDestroy {
  private redirectTo: any[];
  // private routerQueryParamSub: Subscription;
  private loginSub: Subscription;

  constructor(
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastService,
    private userProfileService: UserProfileService) {
  }

  public get isLoggedIn() : boolean {
    return this.userProfileService.isLoggedIn;
  }

  login() {
    let queryParams = this.router.routerState.queryParams;

    this.loginSub = this.loginService
      .login()
      .mergeMap(loginResult => queryParams)
      .map(qp => [qp['redirectTo']])
      .subscribe(redirectTo => {
        this.toastService.activate(`Successfully logged in`);
        if (this.userProfileService.isLoggedIn) {
          let url = redirectTo || [ '/dashboard' ];
          this.router.navigate(url);
        }
      });
  }

  logout() {
    this.loginService.logout();
    this.toastService.activate(`Successfully logged out`);
  }

  ngOnDestroy() {
    this.loginSub.unsubscribe();
  }
}
