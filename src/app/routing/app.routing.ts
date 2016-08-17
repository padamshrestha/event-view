import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { CanDeactivateGuard } from './can-deactivate.service';
import { SessionsRoutes } from '../sessions';
import { SpeakersRoutes } from '../speakers';
import { UserProfileService } from '../shared';

export const routes: Routes = [
  ...SessionsRoutes,
  ...SpeakersRoutes,
];

export const routing = RouterModule.forRoot(routes);

routing.providers.push([
  CanActivateAuthGuard,
  CanDeactivateGuard,
  UserProfileService
]);
