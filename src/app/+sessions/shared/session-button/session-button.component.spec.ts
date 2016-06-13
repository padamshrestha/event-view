import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {SessionButtonComponent} from './session-button.component';

describe('Component: SessionButton', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SessionButtonComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([SessionButtonComponent], (component: SessionButtonComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(SessionButtonComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(SessionButtonComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <ev-session-button></ev-session-button>
  `,
  directives: [SessionButtonComponent],
})
class SessionButtonComponentTestController {
}
