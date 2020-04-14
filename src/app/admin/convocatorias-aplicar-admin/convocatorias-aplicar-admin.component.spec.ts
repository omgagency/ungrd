import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriasAplicarAdminComponent } from './convocatorias-aplicar-admin.component';

describe('ConvocatoriasAplicarAdminComponent', () => {
  let component: ConvocatoriasAplicarAdminComponent;
  let fixture: ComponentFixture<ConvocatoriasAplicarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriasAplicarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriasAplicarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
