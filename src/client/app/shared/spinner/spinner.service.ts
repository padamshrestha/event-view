import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Rx';

export interface ISpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  private spinnerSubject = new Subject<ISpinnerState>();

  spinnerState = this.spinnerSubject;

  show() {
    // TODO fix this
    // this.spinnerSubject.next(<ISpinnerState>{ show: true });
  }

  hide() {
    // TODO fix this
    // this.spinnerSubject.next(<ISpinnerState>{ show: false });
  }
}
