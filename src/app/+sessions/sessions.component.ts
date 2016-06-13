import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Routes} from '@angular/router';

import {SessionComponent} from './+session';
import {SessionListComponent} from './+session-list';
import {SessionService} from './shared';

@Component({
  moduleId: module.id,
  selector: 'ev-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: ['sessions.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [SessionService],
})
@Routes([
  {path: '/', component: SessionListComponent},
  {path: '/:id', component: SessionComponent},
])
export class SessionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
