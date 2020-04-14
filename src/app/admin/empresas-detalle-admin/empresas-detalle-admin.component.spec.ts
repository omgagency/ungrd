import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasDetalleAdminComponent } from './empresas-detalle-admin.component';

describe('EmpresasDetalleAdminComponent', () => {
  let component: EmpresasDetalleAdminComponent;
  let fixture: ComponentFixture<EmpresasDetalleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasDetalleAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasDetalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
