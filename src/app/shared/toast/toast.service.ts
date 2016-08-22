import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface ToastMessage {
  message:string
}

@Injectable()
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();

  toastState = this.toastSubject;

  activate(message?: string) {
    this.toastSubject.next(<ToastMessage>{ message: message });
  }

  constructor() {
    console.log("created toast service")
  }
}
