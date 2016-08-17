import { NgModule } from '@angular/core';

import { DashboardButtonComponent } from './shared/dashboard-button/dashboard-button.component';
import { routing, routedComponents } from './dashboard.routing';
import { SharedModule } from '../shared/shared.module';

const declarables = [DashboardButtonComponent, routedComponents]

@NgModule({
  imports: [routing, SharedModule],
  declarations: [declarables]
})
export class DashboardModule { }
