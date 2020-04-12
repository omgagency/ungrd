import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Registro1Component } from './registro1/registro1.component';
import { Registro2Component } from './registro2/registro2.component';
import { Registro3Component } from './registro3/registro3.component';
import { Registro4Component } from './registro4/registro4.component';
import { LoginComponent } from './login/login.component';
import { RegistrosAdminComponent } from './registros-admin/registros-admin.component';
import { EmpresasAdminComponent } from './empresas-admin/empresas-admin.component';
import { ConvocatoriasAdminComponent } from './convocatorias-admin/convocatorias-admin.component';
import { ConvocatoriasDetalleAdminComponent } from './convocatorias-detalle-admin/convocatorias-detalle-admin.component';
import { ActualizarDatosAdminComponent } from './actualizar-datos-admin/actualizar-datos-admin.component';
import { UsuarioConvocatoriasAdminComponent } from './usuario-convocatorias-admin/usuario-convocatorias-admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro1', component: Registro1Component },
  { path: 'registro2', component: Registro2Component },
  { path: 'registro3', component: Registro3Component },
  { path: 'registro4', component: Registro4Component },
  { path: 'admin', component: LoginComponent },
  { path: 'admin/registros', component: RegistrosAdminComponent },
  { path: 'admin/empresas', component: EmpresasAdminComponent },
  { path: 'admin/convocatorias', component: ConvocatoriasAdminComponent },
  { path: 'admin/convocatorias/crear', component: ConvocatoriasDetalleAdminComponent },
  { path: 'admin/convocatorias/usuarios', component: UsuarioConvocatoriasAdminComponent },
  { path: 'admin/usuario', component:  ActualizarDatosAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
