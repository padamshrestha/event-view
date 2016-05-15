import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

export interface ISpinnerState {
  show: boolean;
}

@Injectable()
export class SpinnerService {
  spinnerState = this.spinnerSubject;

  private spinnerSubject = new Subject<ISpinnerState>();

  show() {
    this.spinnerSubject.next(<ISpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<ISpinnerState>{ show: false });
  }
}
