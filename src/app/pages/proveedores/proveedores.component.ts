import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: []
})
export class ProveedoresComponent implements OnInit {

  proveedores: any[] = [];

  constructor(private empleadosService: EmpleadosService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getProveedores();
  }

  getProveedores(): void {
    this.empleadosService.obtenerProveedores().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.proveedores = datos.content;
        console.log(this.proveedores);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  eliminarProveedor(idEmpleado: number){
    Swal.fire({
      title: '¿Esta seguro?',
      text: "El proveedor sera eliminado",
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
              this.getProveedores();
            });
          });
      }
    })
  }

  editarEmpleado(idEmpleado: number){

  }

}
