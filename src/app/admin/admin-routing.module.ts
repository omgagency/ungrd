import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegistroComponent } from './registro/registro.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';


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
        path: 'convocatorias',
        component: ConvocatoriasComponent
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
