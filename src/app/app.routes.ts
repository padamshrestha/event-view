import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './+dashboard/dashboard.routes';
import { SessionsRoutes } from './+sessions/sessions.routes';
import { SpeakersRoutes } from './+speakers/speakers.routes';

import { AuthGuard, AUTH_PROVIDERS } from './shared';
import { CanDeactivateGuard } from './app.interfaces';

export const routes: RouterConfig = [
  // {path: '/', component: DashboardComponent},
  ...DashboardRoutes,
  ...SessionsRoutes,
  ...SpeakersRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];
