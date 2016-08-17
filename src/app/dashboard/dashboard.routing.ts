import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const dashboardRoutes: Routes = [
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

export const routing = RouterModule.forRoot(dashboardRoutes);

export const routedComponents = dashboardRoutes.filter(r => r.component != undefined).map(r => r.component)
