import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriasAdminComponent } from './convocatorias-admin.component';

describe('ConvocatoriasAdminComponent', () => {
  let component: ConvocatoriasAdminComponent;
  let fixture: ComponentFixture<ConvocatoriasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvocatoriasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvocatoriasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
