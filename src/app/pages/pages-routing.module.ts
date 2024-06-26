import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { PersonalComponent } from './personal/personal.component';
import { AltaComponent } from './personal/alta/alta.component';
import { AltaProductosComponent } from './productos/alta-productos/alta-productos.component';
import { EditarPersonalComponent } from './personal/editar-personal/editar-personal.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { AltaProveedorComponent } from './proveedores/alta-proveedor/alta-proveedor.component';



const routes: Routes = [
  {path: '', component: PagesComponent,
    children:[
      {path: 'home', component: HomeComponent, data: {title: "Nosotros"}},
      {path: 'productos', component: ProductosComponent, data: {title: "Inventario"}},
      {path: 'ventas', component: VentasComponent, data: {title: "Punto de Venta"}},
      {path: 'personal', component: PersonalComponent, data: {title: "Personal"}},
      {path: 'personal/alta', component: AltaComponent, data: {title: "Alta de Empleado"}},
      {path: 'personal/editar/:id', component: EditarPersonalComponent, data: {title: "Actualizar Empleado"}},
      {path: 'productos/alta', component: AltaProductosComponent, data: {title: "Alta de Producto"}},
      {path: 'productos/editar/:id', component: AltaProductosComponent, data: {title: "Actualizar de Producto"}},
      {path: 'proveedores', component: ProveedoresComponent, data: {title: "Proveedores"}},
      {path: 'proveedores/alta', component: AltaProveedorComponent, data: {title: "Alta de Proveedor"}},
      {path: 'proveedores/editar/:id', component: AltaProveedorComponent, data: {title: "Actualizar Proveedor"}},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
