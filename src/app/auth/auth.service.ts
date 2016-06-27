import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  isLoggedIn: boolean = false;
  count = 0;

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

  toggleLogState(val: boolean) {
    this.count++;
    this.isLoggedIn = val;
    console.log(this.count);
    console.log(`login state is now ${this.isLoggedIn}`);
  }
}
