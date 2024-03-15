import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonalComponent } from './personal/personal.component';
import { VentasComponent } from './ventas/ventas.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    EmpleadosComponent,
    VentasComponent,
    PersonalComponent,
    PageNotFoundComponent,
    PagesComponent
  ],
  exports:[
    HomeComponent,
    ProductosComponent,
    EmpleadosComponent,
    VentasComponent,
    PersonalComponent,
    PageNotFoundComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
