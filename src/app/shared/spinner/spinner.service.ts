import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/subject';

export interface SpinnerState { show: boolean; }

@Injectable()
export class SpinnerService {
  private spinnerSubject = new Subject<SpinnerState>();

  spinnerState = this.spinnerSubject;

  show() { this.spinnerSubject.next(<SpinnerState>{show: true}); }

  hide() { this.spinnerSubject.next(<SpinnerState>{show: false}); }
}
