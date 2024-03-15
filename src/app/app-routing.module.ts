import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PagesComponent } from './pages/pages.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: PagesComponent,
    children:[
      {path: 'home', component: HomeComponent, data: {title: "Nosotros"}},
      {path: 'productos', component: ProductosComponent, data: {title: "Inventario"}},
      {path: 'ventas', component: VentasComponent, data: {title: "Ventas"}},
      {path: 'personal', component: PersonalComponent, data: {title: "Personal"}},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
