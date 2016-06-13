import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import {SpinnerService} from './spinner.service';

describe('Spinner Service', () => {
  beforeEachProviders(() => [SpinnerService]);

  it('should ...',
     inject([SpinnerService], (service: SpinnerService) => { expect(service).toBeTruthy(); }));
});
