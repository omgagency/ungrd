import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { ConvocatoriasDetalleAdminComponent } from './convocatorias-detalle-admin/convocatorias-detalle-admin.component';
import { EmpresasDetalleAdminComponent } from './empresas-detalle-admin/empresas-detalle-admin.component';
import { ConvocatoriasAplicarAdminComponent } from './convocatorias-aplicar-admin/convocatorias-aplicar-admin.component';




const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: 'empresas',
        component: EmpresasComponent
      },
      {
        path: 'empresas/detalle',
        component: EmpresasDetalleAdminComponent
      },
      {
        path: 'convocatorias',
        component: ConvocatoriasComponent
      },
       {
        path: 'convocatorias/crear',
        component: ConvocatoriasDetalleAdminComponent
      },
       {
        path: 'convocatorias/aplicar',
        component: ConvocatoriasAplicarAdminComponent
      },
      {
        path: '',
        redirectTo: 'registro', pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
