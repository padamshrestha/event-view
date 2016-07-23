import { RouterConfig }          from '@angular/router';
import { DashboardComponent }     from './dashboard.component';
import { CanDeactivateGuard, CanActivateAuthGuard } from '../routing';

export const DashboardRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: 'dashboard', // could do /dashboard, but we are already at this level
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];
