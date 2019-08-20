import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgAlunPage } from './lg-alun.page';

describe('LgAlunPage', () => {
  let component: LgAlunPage;
  let fixture: ComponentFixture<LgAlunPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgAlunPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgAlunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
