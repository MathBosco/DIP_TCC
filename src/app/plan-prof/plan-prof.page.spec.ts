import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanProfPage } from './plan-prof.page';

describe('PlanProfPage', () => {
  let component: PlanProfPage;
  let fixture: ComponentFixture<PlanProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
