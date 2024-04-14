import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { PersonalComponent } from './personal/personal.component';
import { AltaComponent } from './personal/alta/alta.component';



const routes: Routes = [
  {path: '', component: PagesComponent,
    children:[
      {path: 'home', component: HomeComponent, data: {title: "Nosotros"}},
      {path: 'productos', component: ProductosComponent, data: {title: "Inventario"}},
      {path: 'ventas', component: VentasComponent, data: {title: "Ventas"}},
      {path: 'personal', component: PersonalComponent, data: {title: "Personal"}},
      {path: 'personal/alta', component: AltaComponent, data: {title: "Alta de Empleado"}},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
