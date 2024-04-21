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
import { AltaComponent } from './personal/alta/alta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaProductosComponent } from './productos/alta-productos/alta-productos.component';
import { EditarPersonalComponent } from './personal/editar-personal/editar-personal.component';



@NgModule({
  declarations: [
    HomeComponent,
    ProductosComponent,
    VentasComponent,
    PersonalComponent,
    PagesComponent,
    RolesComponent,
    AltaComponent,
    AltaProductosComponent,
    EditarPersonalComponent,
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
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
