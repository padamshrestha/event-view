import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import {EventViewAppComponent} from '../app/event-view.component';

beforeEachProviders(() => [EventViewAppComponent]);

describe('App: EventView', () => {
  it('should create the app', inject([EventViewAppComponent], (app: EventViewAppComponent) => {
       expect(app).toBeTruthy();
     }));

  // it('should have as title \'event-view works!\'',
  //     inject([EventViewAppComponent], (app: EventViewAppComponent) => {
  //   expect(app.title).toEqual('event-view works!');
  // }));
});
