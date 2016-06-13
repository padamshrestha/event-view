import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/core/testing';
import {InitCapsPipe} from './init-caps.pipe';

describe('InitCaps Pipe', () => {
  beforeEachProviders(() => [InitCapsPipe]);

  it('should transform the input', inject([InitCapsPipe], (pipe: InitCapsPipe) => {
      expect(pipe.transform('')).toBe(null);
  }));
});
