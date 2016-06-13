import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DashboardButtonComponent} from './dashboard-button.component';

describe('Component: DashboardButton', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [DashboardButtonComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([DashboardButtonComponent],
      (component: DashboardButtonComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(DashboardButtonComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(DashboardButtonComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <ev-dashboard-button></ev-dashboard-button>
  `,
  directives: [DashboardButtonComponent]
})
class DashboardButtonComponentTestController {
}

