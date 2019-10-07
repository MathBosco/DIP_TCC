import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasBebeProfPage } from './aulas-bebe-prof.page';

describe('AulasBebeProfPage', () => {
  let component: AulasBebeProfPage;
  let fixture: ComponentFixture<AulasBebeProfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AulasBebeProfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AulasBebeProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
