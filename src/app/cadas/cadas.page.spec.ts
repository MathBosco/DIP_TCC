import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadasPage } from './cadas.page';

describe('CadasPage', () => {
  let component: CadasPage;
  let fixture: ComponentFixture<CadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
