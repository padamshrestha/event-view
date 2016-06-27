import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import { SpeakerService } from '../shared';

@Component({
  // moduleId: module.id,
  // selector: 'ev-speakers',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})
export class SpeakersComponent { }
