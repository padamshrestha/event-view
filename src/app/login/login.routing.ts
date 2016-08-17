import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }     from './login.component';

export const loginRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

export const routing = RouterModule.forRoot(loginRoutes);

export const routedComponents = loginRoutes.filter(r => r.component != undefined).map(r => r.component)
