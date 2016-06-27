import { RouterConfig } from '@angular/router';

import { SpeakerListComponent } from './+speaker-list/speaker-list.component';
import { SpeakerComponent } from './+speaker/speaker.component';
import { SpeakersComponent } from './speakers.component';

import { CanDeactivateGuard } from '../app.interfaces';
import { AuthGuard } from '../auth';

export const SpeakersRoutes: RouterConfig = [
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
        canActivate: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

