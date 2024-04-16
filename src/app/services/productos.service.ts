import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AltaRequest } from '../pages/productos/alta-productos/AltaRequest';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private URL = 'http://localhost:8080/productos';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerProductos(page: number): Observable<any> {
    return this.http.get<any>(`${this.URL}?page=${page}&size=10`);
  }

  altaProductos(request: AltaRequest){
    return this.http.post<any>(`${this.URL}`, request);
  }

  ventaProductos(request: any){
    return this.http.post<any>(`${this.URL}/ventas`, request);
  }
}
