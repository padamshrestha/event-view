import { RouterConfig }          from '@angular/router';

import { SpeakerListComponent }     from './+speaker-list/speaker-list.component';
import { SpeakerComponent }     from './+speaker/speaker.component';
import { SpeakersComponent }     from './speakers.component';

import { AuthGuard }    from '../shared';
import { CanDeactivateGuard }    from '../app.interfaces';

export const SpeakersRoutes: RouterConfig = [
  // {
  //   path: '',
  //   redirectTo: '/speakers',
  //   terminal: true
  // },
  {
    path: 'speakers',
    component: SpeakersComponent,
    children: [
      {
        path: '',
        component: SpeakerListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: SpeakerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

