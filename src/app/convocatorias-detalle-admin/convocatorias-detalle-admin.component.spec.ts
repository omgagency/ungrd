import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriasDetalleAdminComponent } from './convocatorias-detalle-admin.component';

describe('ConvocatoriasDetalleAdminComponent', () => {
  let component: ConvocatoriasDetalleAdminComponent;
  let fixture: ComponentFixture<ConvocatoriasDetalleAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriasDetalleAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriasDetalleAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
