import { Routes } from '@angular/router';

import { SpeakerListComponent } from './speaker-list/speaker-list.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakersComponent } from './speakers.component';
import { CanDeactivateGuard, CanActivateAuthGuard } from '../routing';

export const SpeakersRoutes: Routes = [
  {
    path: 'speakers',
    component: SpeakersComponent,
    // canActivate: [CanActivateAuthGuard],
    children: [
      {
        path: '',
        component: SpeakerListComponent,
        canActivate: [CanActivateAuthGuard]
      },
      {
        path: ':id',
        component: SpeakerComponent,
        canActivate: [CanActivateAuthGuard],
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];

