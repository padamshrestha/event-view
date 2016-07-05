import { provideRouter, RouterConfig } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { CanDeactivateGuard } from './can-deactivate.service';
import { DashboardRoutes } from '../+dashboard';
import { LoginRoutes } from '../+login';
import { SessionsRoutes } from '../+sessions';
import { SpeakersRoutes } from '../+speakers';
import { UserProfileService } from '../shared';

export * from './can-activate-auth.service';
export * from './can-deactivate.service';

export const routes: RouterConfig = [
  ...DashboardRoutes,
  ...SessionsRoutes,
  ...SpeakersRoutes,
  ...LoginRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  CanActivateAuthGuard,
  CanDeactivateGuard,
  UserProfileService
];
