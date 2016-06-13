import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {beforeEach, beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {ModalComponent} from './modal.component';

describe('Component: Modal', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ModalComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ModalComponent], (component: ModalComponent) => { expect(component).toBeTruthy(); }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ModalComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ModalComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <ev-modal></ev-modal>
  `,
  directives: [ModalComponent],
})
class ModalComponentTestController {
}
