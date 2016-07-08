import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class LoginComponent implements OnDestroy, OnInit {
  private redirectTo: any[];
  private routerQueryParamSub: Subscription;

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
    this.loginService
      .login()
      .subscribe(() => {
        if (this.userProfileService.isLoggedIn) {
          this.toastService.activate(`Successfully logged in`);
          let url = this.redirectTo || [ '/dashboard' ];
          this.router.navigate(url);
        }
      });
  }

  logout() {
    this.loginService.logout();
    this.toastService.activate(`Successfully logged out`);
  }

  ngOnDestroy() {
    this.routerQueryParamSub.unsubscribe();
  }

  ngOnInit() {
    // Could use a snapshot here, as long as the parameters do not change.
    // This may happen when a component is re-used.
    // this.redirectTo = [this.router.routerState.snapshot.queryParams.redirectTo];
    this.routerQueryParamSub = this.router.routerState
      .queryParams
      .map(qp => [qp['redirectTo']])
      // .do(redirectTo => this.redirectTo = redirectTo)
      .subscribe(redirectTo => this.redirectTo = redirectTo);
  }
}
