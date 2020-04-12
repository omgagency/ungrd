import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConvocatoriasAdminComponent } from './usuario-convocatorias-admin.component';

describe('UsuarioConvocatoriasAdminComponent', () => {
  let component: UsuarioConvocatoriasAdminComponent;
  let fixture: ComponentFixture<UsuarioConvocatoriasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioConvocatoriasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioConvocatoriasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
