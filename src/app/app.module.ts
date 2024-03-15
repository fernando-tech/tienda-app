import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    FooterComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    ProductosComponent,
    EmpleadosComponent,
    VentasComponent,
    PersonalComponent,
    PageNotFoundComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
