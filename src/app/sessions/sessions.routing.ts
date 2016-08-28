import { Routes, RouterModule } from '@angular/router';

import { SessionListComponent } from './session-list/session-list.component';
import { SessionComponent } from './session/session.component';
import { SessionsComponent } from './sessions.component';
import { CanDeactivateGuard } from '../core';

const routes: Routes = [
  {
    path: '',
    component: SessionsComponent,
    children: [
      {
        path: '',
        component: SessionListComponent,
      },
      {
        path: ':id',
        component: SessionComponent,
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = [SessionsComponent, SessionListComponent, SessionComponent]
