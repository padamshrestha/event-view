export * from './auth.guard';
export * from './auth.service';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

export const AUTH_PROVIDERS = [AuthGuard, AuthService];
