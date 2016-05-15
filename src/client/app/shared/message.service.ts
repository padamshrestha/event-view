import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Rx';

import { CONFIG } from './config';
import { ToastService } from './toast';

export interface IResetMessage {
  message: string;
}

@Injectable()
export class MessageService {
  state = this.subject;

  private subject = new Subject<IResetMessage>();

  constructor(private http: Http, private toastService: ToastService) { }

  resetDb() {
    let msg = 'Reset the Data Successfully';
    this.http.post(CONFIG.baseUrls.resetDb, null)
      .subscribe(() => {
        this.subject.next({ message: msg });
        this.toastService.activate(msg);
      });
  }
}
