import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDatosAdminComponent } from './actualizar-datos-admin.component';

describe('ActualizarDatosAdminComponent', () => {
  let component: ActualizarDatosAdminComponent;
  let fixture: ComponentFixture<ActualizarDatosAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarDatosAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDatosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
