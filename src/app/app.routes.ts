import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './+dashboard';
import { LoginRoutes } from './+login';
import { SessionsRoutes } from './+sessions';
import { SpeakersRoutes } from './+speakers';
import { CanDeactivateGuard } from './app.interfaces';
import { AUTH_PROVIDERS } from './auth';

export const routes: RouterConfig = [
  ...DashboardRoutes,
  ...SessionsRoutes,
  ...SpeakersRoutes,
  ...LoginRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];
