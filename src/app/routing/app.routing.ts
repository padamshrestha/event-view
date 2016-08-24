import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { CanDeactivateGuard } from './can-deactivate.service';
import { UserProfileService } from '../core';
import { ErrorComponent } from '../error.component';

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
    // canLoad: [CanActivateAuthGuard],
  },
  {
    path: 'sessions',
    loadChildren: 'app/sessions/sessions.module',
    canActivate: [CanActivateAuthGuard],
    // canLoad: [CanActivateAuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    component: ErrorComponent
  },
];

export const routing = RouterModule.forRoot(routes);

routing.providers.push([
  CanActivateAuthGuard,
  CanDeactivateGuard,
  UserProfileService
]);
