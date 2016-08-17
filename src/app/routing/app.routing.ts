import { Routes, RouterModule } from '@angular/router';

import { CanActivateAuthGuard } from './can-activate-auth.service';
import { CanDeactivateGuard } from './can-deactivate.service';
import { UserProfileService } from '../shared';

export const routing = RouterModule.forRoot([]);

routing.providers.push([
  CanActivateAuthGuard,
  CanDeactivateGuard,
  UserProfileService
]);
