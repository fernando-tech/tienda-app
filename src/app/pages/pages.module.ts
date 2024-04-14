import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PersonalComponent } from './personal/personal.component';
import { VentasComponent } from './ventas/ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RolesComponent } from './roles/roles.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    VentasComponent,
    PersonalComponent,
    PagesComponent,
    RolesComponent,
  ],
  exports:[
    HomeComponent,
    ProductosComponent,
    VentasComponent,
    PersonalComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ]
})
export class PagesModule { }
