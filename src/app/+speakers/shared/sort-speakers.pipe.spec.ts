import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {SortSpeakersPipe} from './sort-speakers.pipe';

describe('SortSpeakers Pipe', () => {
  beforeEachProviders(() => [SortSpeakersPipe]);

  it('should transform the input', inject([SortSpeakersPipe], (pipe: SortSpeakersPipe) => {
       expect(pipe.transform([])).toBe(null);
     }));
});
