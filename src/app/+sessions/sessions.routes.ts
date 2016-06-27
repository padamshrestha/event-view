import { RouterConfig }          from '@angular/router';

import { SessionListComponent }     from './+session-list/session-list.component';
import { SessionComponent }     from './+session/session.component';
import { SessionsComponent }     from './sessions.component';

import { AuthGuard }    from '../shared';
import { CanDeactivateGuard }    from '../app.interfaces';

export const SessionsRoutes: RouterConfig = [
  // {
  //   path: '',
  //   redirectTo: '/sessions',
  //   terminal: true
  // },
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
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

