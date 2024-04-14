import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../Empleado';
import { RolesService } from 'src/app/services/roles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { AltaRequest } from './AltaRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: []
})
export class AltaComponent implements OnInit {

  formulario: FormGroup;
  empleado?: Empleado;
  puestos: any[] = [];
  gerentes: Empleado[] = [];
  altaRequest = new AltaRequest("","","","");
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';



  constructor(private router: Router,
    private fb: FormBuilder,
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService) {
      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: ['', Validators.required],
        puesto: ['', Validators.required],
      });
    }

  ngOnInit(): void {
    this.obtenerRoles();
  }

  obtenerRoles(){
    this.rolesService.obtenerRoles().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.puestos = datos;
        console.log(this.puestos);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  altaEmpleado():void {
    this.altaRequest.nombre = this.formulario.value.nombre;
    this.altaRequest.apellidoPaterno = this.formulario.value.apellidoPaterno;
    this.altaRequest.apellidoMaterno = this.formulario.value.apellidoMaterno;
    this.altaRequest.puesto = this.formulario.value.puesto;

    console.log(this.formulario.value)
    this.empleadosService.altaEmpelado(this.altaRequest).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se registro correctamente!', 'success');
        this.router.navigate(['/personal']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  convertirAMayusculas() {
    this.nombre = this.nombre.toUpperCase();
    this.apellidoP = this.apellidoP.toUpperCase();
    this.apellidoM = this.apellidoM.toUpperCase();
  }

}
