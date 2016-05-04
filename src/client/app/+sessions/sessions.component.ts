import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';

import { SessionComponent } from './session';
import { SessionListComponent } from './session-list';
import { SessionService } from './shared';

@Component({
  selector: 'ev-sessions-root',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [SessionService]
})
@Routes([
  { path: '/', component: SessionListComponent /* , useAsDefault: true */ },
  { path: '/list/:id', component: SessionListComponent },
  { path: '/:id', component: SessionComponent }
])
export class SessionsComponent { }
