import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAulaPage } from './add-aula.page';

describe('AddAulaPage', () => {
  let component: AddAulaPage;
  let fixture: ComponentFixture<AddAulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAulaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
