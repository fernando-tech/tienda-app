import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AltaRequest } from '../pages/personal/alta/AltaRequest';



@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private URL = 'http://localhost:8080/usuarios';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerEmpleados(page: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/empleados?page=${page}&size=100`);
  }

  obtenerEmpleado(idEmpleado: any): Observable<any> {
    return this.http.get<any>(`${this.URL}/empleados/${idEmpleado}`);
  }

  altaEmpelado(request: AltaRequest){
    return this.http.post<any>(`${this.URL}/empleados`, request);
  }

  actualizarEmpelado(idEmpleado:any, request: AltaRequest){
    return this.http.put<any>(`${this.URL}/empleados/${idEmpleado}`, request);
  }

  eliminarEmpleado(idEmpleado: number){
    return this.http.delete<any>(`${this.URL}/empleados/${idEmpleado}`);
  }

  obtenerProveedores(): Observable<any> {
    return this.http.get<any>(`${this.URL}/proveedores?page=0&size=100`);
  }

  altaProveedor(request: any){
    return this.http.post<any>(`${this.URL}/proveedores`, request);
  }

  actualizarProveedor(idUsuario:any, request: any){
    return this.http.put<any>(`${this.URL}/proveedores/${idUsuario}`, request);
  }

  eliminarProveedor(idUsuario: number){
    return this.http.delete<any>(`${this.URL}/proveedores/${idUsuario}`);
  }
}
