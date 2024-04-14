import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado } from './Empleado';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: []
})
export class PersonalComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadosService: EmpleadosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(): void {
    this.empleadosService.obtenerEmpleados(0).subscribe(
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

  eliminarEmpleado(idEmpleado: number){
    Swal.fire({
      title: '¿Esta seguro?',
      text: "El empleado sera eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.empleadosService.eliminarEmpleado(idEmpleado).subscribe(
          (datos) => {
            Swal.fire('Correcto', '¡Se elimino correctamente!', 'success').then(() => {
              this.getEmpleados();
            });
          });
      }
    })
  }
}
