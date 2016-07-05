import { RouterConfig }          from '@angular/router';
import { DashboardComponent }     from './dashboard.component';
import { CanDeactivateGuard, CanActivateAuthGuard } from '../routing';

export const DashboardRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
];
