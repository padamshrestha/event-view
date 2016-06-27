import { RouterConfig }          from '@angular/router';

import { SessionListComponent } from './+session-list/session-list.component';
import { SessionComponent } from './+session/session.component';
import { SessionsComponent } from './sessions.component';

import { CanDeactivateGuard } from '../app.interfaces';
import { AuthGuard } from '../auth';

export const SessionsRoutes: RouterConfig = [
  {
    path: 'sessions',
    component: SessionsComponent,
    children: [
      {
        path: '',
        component: SessionListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SessionComponent,
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

