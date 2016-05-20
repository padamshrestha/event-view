import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { MessageService } from './message.service';

describe('Message Service', () => {
  beforeEachProviders(() => [MessageService]);

  it('should ...',
      inject([MessageService], (service: MessageService) => {
    expect(service).toBeTruthy();
  }));
});
