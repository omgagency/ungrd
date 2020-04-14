import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from './registro/registro.component';
import { ConvocatoriasDetalleAdminComponent } from './convocatorias-detalle-admin/convocatorias-detalle-admin.component';
import { ConvocatoriasAplicarAdminComponent } from './convocatorias-aplicar-admin/convocatorias-aplicar-admin.component';
import { EmpresasDetalleAdminComponent } from './empresas-detalle-admin/empresas-detalle-admin.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmpresasService } from '../core/empresas/empresas.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConvocatoriasService } from '../core/convocatorias/convocatorias.service';


@NgModule({
  declarations: [AdminComponent, RegistroComponent, EmpresasComponent, ConvocatoriasComponent, ConvocatoriasDetalleAdminComponent, EmpresasDetalleAdminComponent, ConvocatoriasAplicarAdminComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AdminRoutingModule,
  ],
  providers: [
    EmpresasService,
    ConvocatoriasService,
    DecimalPipe
  ]
})
export class AdminModule { }
