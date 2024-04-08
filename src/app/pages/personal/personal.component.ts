import { Component, OnInit } from '@angular/core';
import { Empleado } from './Empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: []
})
export class PersonalComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadosService.obtenerEmpleados().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.empleados = datos;
        console.log(this.empleados);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

}
