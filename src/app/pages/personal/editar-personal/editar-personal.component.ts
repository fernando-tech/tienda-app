import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { RolesService } from 'src/app/services/roles.service';
import { Empleado } from '../Empleado';
import { AltaRequest } from '../alta/AltaRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-personal',
  templateUrl: './editar-personal.component.html',
  styleUrls: []
})
export class EditarPersonalComponent implements OnInit {

  inputTouched: boolean = false;
  formulario: FormGroup;
  empleado?: Empleado;
  puestos: any[] = [];
  gerentes: Empleado[] = [];
  altaRequest = new AltaRequest("","","","",false);
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  idEmpleado: any;
  idPuesto:any;
  keyStatus:any;
  estatus: any[] = [
    {
        "key": true,
        "value": "ACTIVO"
    },
    {
        "key": false,
        "value": "INACTIVO"
    }
]

  constructor(private router: Router,
    private fb: FormBuilder,
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService) {

      this.formulario = this.fb.group({
        nombre: [{ value: '', disabled: true }, Validators.required],
        apellidoPaterno: [{ value: '', disabled: true }, Validators.required],
        apellidoMaterno: [{ value: '', disabled: true }, Validators.required],
        estatus: ['', Validators.required],
        puesto: ['', Validators.required],
      });

      /*this.formulario = this.fb.group({
        id: [{ value: '', disabled: true }, Validators.required],
        nombre: [{ value: '', disabled: true }, Validators.required],
        apellidoPaterno: [{ value: '', disabled: true }, Validators.required],
        apellidoMaterno: [{ value: '', disabled: true }, Validators.required],
        puesto: ['', Validators.required],
        jefe: ['', [Validators.required]],
      });*/
    }

  ngOnInit(): void {
    this.idEmpleado = this.route.snapshot.paramMap.get("id");
    this.obtenerEmpleado(this.idEmpleado);
    this.obtenerRoles();
  }

  obtenerEmpleado(idEmpleado: any){
    this.empleadosService.obtenerEmpleado(idEmpleado).subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.idPuesto = datos.rol.idRol;
        this.keyStatus = datos.activo;
        this.empleado = datos;
        this.formulario.get('puesto')?.setValue(this.idPuesto);
        this.formulario.get('estatus')?.setValue(this.keyStatus);
        console.log(this.empleado);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
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

  actualizarEmpleado(){
    this.altaRequest.nombre = this.formulario.value.nombre;
    this.altaRequest.apellidoPaterno = this.formulario.value.apellidoPaterno;
    this.altaRequest.apellidoMaterno = this.formulario.value.apellidoMaterno;
    this.altaRequest.puesto = this.formulario.value.puesto;
    this.altaRequest.estatus = this.formulario.value.estatus;

    console.log(this.formulario.value);

    this.empleadosService.actualizarEmpelado(this.idEmpleado, this.altaRequest).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se actualizo correctamente!', 'success');
        this.router.navigate(['/personal']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  onInputChange() {
    this.inputTouched = true;
  }
}
