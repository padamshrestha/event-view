import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserProfileService } from '../shared';

@Injectable()
export class LoginService {
  constructor(private userProfileService: UserProfileService) { }

  login() {
    return Observable.of(true)
        .delay(1000)
        .do(this.toggleLogState.bind(this));
        // .do((val: boolean) => {
        //   this.isLoggedIn = true;
        //   console.log(this.isLoggedIn);
        // });
  }

  logout() {
    this.toggleLogState(false);
  }

  private toggleLogState(val: boolean) {
    this.userProfileService.isLoggedIn = val;
    console.log(`login state is now ${this.userProfileService.isLoggedIn}`);
  }
}
