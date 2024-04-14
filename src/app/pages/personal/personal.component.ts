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
  page: any;
  paginador: any;
  pathPaginator: any;

  constructor(private empleadosService: EmpleadosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(param => {
      this.page = 0;
    })

    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadosService.obtenerEmpleados(this.page).subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.empleados = datos.content;
        console.log(this.empleados);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

}
