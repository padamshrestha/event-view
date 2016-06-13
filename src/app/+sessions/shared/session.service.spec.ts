import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {SessionService} from './session.service';

describe('Session Service', () => {
  beforeEachProviders(() => [SessionService]);

  it('should ...',
     inject([SessionService], (service: SessionService) => { expect(service).toBeTruthy(); }));
});
