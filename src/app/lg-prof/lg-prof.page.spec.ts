import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgProfPage } from './lg-prof.page';

describe('LgProfPage', () => {
  let component: LgProfPage;
  let fixture: ComponentFixture<LgProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
