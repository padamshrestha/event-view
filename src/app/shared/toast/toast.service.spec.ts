import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {ToastService} from './toast.service';

describe('Toast Service', () => {
  beforeEachProviders(() => [ToastService]);

  it('should ...',
     inject([ToastService], (service: ToastService) => { expect(service).toBeTruthy(); }));
});
