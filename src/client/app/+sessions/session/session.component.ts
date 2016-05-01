import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CanDeactivate, ComponentInstruction, RouteParams, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { EntityService, ModalService, ToastService } from '../../../app/shared';
import { Session, SessionService } from '../shared';

@Component({
  moduleId: __moduleName,
  selector: 'ev-session',
  templateUrl: 'session.component.html',
  styles: ['.mdl-textfield__label {top: 0;}'],
  directives: [ROUTER_DIRECTIVES]
})
export class SessionComponent implements CanDeactivate, OnDestroy, OnInit {
  private dbResetSubscription: Subscription;

  @Input() session: Session;
  editSession: Session = <Session>{};

  constructor(
    private entityService: EntityService,
    private modalService: ModalService,
    private routeParams: RouteParams,
    private router: Router,
    private toastService: ToastService,
    private sessionService: SessionService) { }

  cancel(showToast = true) {
    this.editSession = this.entityService.clone(this.session);
    if (showToast) {
      this.toastService.activate(`Cancelled changes to ${this.session.name}`);
    }
  }

  delete() {
    let msg = `Do you want to delete the ${this.session.name}?`;
    this.modalService.activate(msg).then((responseOK) => {
      if (responseOK) {
        this.cancel(false);
        this.sessionService.deleteSession(this.session)
          .subscribe(() => { // Success path
            this.toastService.activate(`Deleted ${this.session.name}`);
            this.gotoSessions();
          },
          (err) => this.handleServiceError('Delete', err), // Failure path
          () => console.log('Delete Completed') // Completed actions
          );
      }
    });
  }

  isAddMode() {
    let id = +this.routeParams.get('id');
    return isNaN(id);
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getSession();
    this.dbResetSubscription = this.sessionService.onDbReset
      .subscribe(() => {
        this.getSession();
      });
  }

  routerCanDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
    return !this.session ||
      !this.isDirty() ||
      this.modalService.activate();
  }

  save() {
    let session = this.session = this.entityService.merge(this.session, this.editSession);
    if (session.id == null) {
      this.sessionService.addSession(session)
        .subscribe(s => {
          this.setEditSession(s);
          this.toastService.activate(`Successfully added ${s.name}`);
          this.gotoSessions();
        });
      return;
    }
    this.sessionService.updateSession(this.session)
      .subscribe(() => this.toastService.activate(`Successfully saved ${this.session.name}`));
  }

  private getSession() {
    let id = +this.routeParams.get('id');
    if (id === 0) { return; };
    if (this.isAddMode()) {
      this.session = <Session>{ name: '', level: '' };
      this.editSession = this.entityService.clone(this.session);
      return;
    }
    this.sessionService.getSession(id)
      .subscribe((session: Session) => this.setEditSession(session));
  }

  private gotoSessions() {
    let id = this.session ? this.session.id : null;
    let route = ['Sessions', { id: id }];
    this.router.navigate(route);
  }

  private handleServiceError(op: string, err: any) {
    console.error(`${op} error: ${err.message || err}`);
  }

  private isDirty() {
    return this.entityService.propertiesDiffer(this.session, this.editSession);
  }

  private setEditSession(session: Session) {
    if (session) {
      this.session = session;
      this.editSession = this.entityService.clone(this.session);
    } else {
      this.gotoSessions();
    }
  }
}
