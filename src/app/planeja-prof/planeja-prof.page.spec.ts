import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanejaProfPage } from './planeja-prof.page';

describe('PlanejaProfPage', () => {
  let component: PlanejaProfPage;
  let fixture: ComponentFixture<PlanejaProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanejaProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanejaProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
