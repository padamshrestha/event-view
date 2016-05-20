import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {Speaker} from './speaker.model';

describe('Speaker', () => {
  it('should create an instance', () => {
    expect(new Speaker()).toBeTruthy();
  });
});
