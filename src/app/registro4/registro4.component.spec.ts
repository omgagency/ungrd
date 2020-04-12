import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Registro4Component } from './registro4.component';

describe('Registro4Component', () => {
  let component: Registro4Component;
  let fixture: ComponentFixture<Registro4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Registro4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Registro4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
