import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import {Session} from './session.model';

describe('Session', () => {
  it('should create an instance', () => { expect(new Session()).toBeTruthy(); });
});
