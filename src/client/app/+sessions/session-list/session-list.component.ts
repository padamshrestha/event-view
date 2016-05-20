import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Subscription } from 'rxjs/subscription';

import { FilterTextComponent, FilterService } from '../../../app/shared';
import { Session, SessionService, SessionButtonComponent } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'ev-sessions',
  templateUrl: 'session-list.component.html',
  directives: [FilterTextComponent, SessionButtonComponent, ROUTER_DIRECTIVES],
  styleUrls: ['session-list.component.css']
})
export class SessionListComponent implements OnDestroy, OnInit {
  private dbResetSubscription: Subscription;

  sessions: Session[];
  filteredSessions = this.sessions;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(
    private filterService: FilterService,
    private sessionService: SessionService) { }

  filterChanged(searchText: string) {
    this.filteredSessions = this.filterService.filter(searchText, ['id', 'name', 'type'], this.sessions);
  }

  getSessions() {
    this.sessions = [];
    this.sessionService.getSessions()
      .subscribe(sessions => {
        this.sessions = this.filteredSessions = sessions;
        this.filterComponent.clear();
      },
      error => {
        console.log('error occurred here');
        console.log(error);
      },
       () => {
        console.log('completed');
      });
  }

  ngOnDestroy() {
    this.dbResetSubscription.unsubscribe();
  }

  ngOnInit() {
    componentHandler.upgradeDom();
    this.getSessions();
    this.dbResetSubscription = this.sessionService.onDbReset
      .subscribe(() => this.getSessions());
  }

  trackBySessions(index: number, session: Session) {
    return session.id;
  }
}
