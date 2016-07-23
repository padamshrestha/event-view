import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { SessionService } from './shared';

@Component({
  // selector: 'ev-sessions',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES],
  providers: [SessionService]
})
export class SessionsComponent  {}
