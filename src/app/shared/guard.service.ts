import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class GuardService {
  canDeactivate(deactivate): Observable<boolean> | boolean {
    let p = Promise.resolve(deactivate);
    let o = Observable.fromPromise(p);
    return o;
  }
}
