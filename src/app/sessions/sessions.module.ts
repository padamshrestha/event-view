import { NgModule } from '@angular/core';

import { SessionButtonComponent } from './shared/session-button/Session-button.component';
import { routing, routedComponents } from './sessions.routing';
import { SharedModule } from '../shared/shared.module';
import { SessionService } from './shared/session.service';  // TODO: Remove this when bug is fixed in A2 RC5

const declarables = [SessionButtonComponent, routedComponents]

@NgModule({
  imports: [routing, SharedModule],
  declarations: [declarables],
  providers: [SessionService] // TODO: Remove this when bug is fixed in A2 RC5
})
export default class SessionsModule { }
