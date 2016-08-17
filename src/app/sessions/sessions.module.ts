import { NgModule } from '@angular/core';

import { SessionButtonComponent } from './shared/session-button/Session-button.component';
import { routing, routedComponents } from './sessions.routing';
import { SharedModule } from '../shared/shared.module';

const declarables = [SessionButtonComponent, routedComponents]

const providers = [];

@NgModule({
  imports: [routing, SharedModule],
  declarations: [declarables],
  providers: [providers]
})
export class SessionsModule { }
