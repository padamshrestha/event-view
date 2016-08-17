import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { CanDeactivateGuard } from './can-deactivate.service';
import { UserProfileService } from '../shared';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module'
  },
  {
    path: 'speakers',
    loadChildren: 'app/speakers/speakers.module',
    canActivate: [CanActivateAuthGuard],
  },
  {
    path: 'sessions',
    loadChildren: 'app/sessions/sessions.module',
    canActivate: [CanActivateAuthGuard],
  },
];

export const routing = RouterModule.forRoot(routes);

routing.providers.push([
  CanActivateAuthGuard,
  CanDeactivateGuard,
  UserProfileService
]);
