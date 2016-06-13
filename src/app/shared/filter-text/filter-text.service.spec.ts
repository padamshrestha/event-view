import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {FilterTextService} from './filter-text.service';

describe('FilterText Service', () => {
  beforeEachProviders(() => [FilterTextService]);

  it('should ...', inject([FilterTextService], (service: FilterTextService) => {
       expect(service).toBeTruthy();
     }));
});
