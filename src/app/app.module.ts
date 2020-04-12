import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Registro1Component } from './registro1/registro1.component';
import { Registro2Component } from './registro2/registro2.component';
import { Registro3Component } from './registro3/registro3.component';
import { Registro4Component } from './registro4/registro4.component';
import { LoginComponent } from './login/login.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { RegistrosAdminComponent } from './registros-admin/registros-admin.component';
import { EmpresasAdminComponent } from './empresas-admin/empresas-admin.component';
import { ConvocatoriasAdminComponent } from './convocatorias-admin/convocatorias-admin.component';
import { ConvocatoriasDetalleAdminComponent } from './convocatorias-detalle-admin/convocatorias-detalle-admin.component';
import { ActualizarDatosAdminComponent } from './actualizar-datos-admin/actualizar-datos-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    HomeComponent,
    FooterComponent,
    Registro1Component,
    Registro2Component,
    Registro3Component,
    Registro4Component,
    LoginComponent,
    HeaderAdminComponent,
    MenuAdminComponent,
    RegistrosAdminComponent,
    EmpresasAdminComponent,
    ConvocatoriasAdminComponent,
    ConvocatoriasDetalleAdminComponent,
    ActualizarDatosAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
