import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private URL = 'http://localhost:8080/empleados';
  private httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  obtenerEmpleados(): Observable<any> {
    return this.http.get<any>(`${this.URL}`);
  }

}
