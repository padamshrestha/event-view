import { NgModule } from '@angular/core';

import { SessionButtonComponent } from './shared/session-button/Session-button.component';

// routing = routingModuleWithProvidersAndRouteConfiguration
import { routing, routedComponents } from './sessions.routing';

import { SharedModule } from '../shared/shared.module';
import { SessionService } from './shared/session.service';  // TODO: Remove this when bug is fixed in A2 RC5

const declarables = [SessionButtonComponent, routedComponents]

@NgModule({
  imports: [routing, SharedModule],
  declarations: [declarables],

  // TODO: Remove this when bug is fixed in A2 RC5.
  //We can put this in the component when it is fixed ... or we cna do it in the module.
  // In the module, everyone gets it everywhere tho.
  providers: [SessionService]
})
export default class SessionsModule { }
