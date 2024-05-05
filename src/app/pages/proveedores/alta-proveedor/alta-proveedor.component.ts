import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles.service';
import { EmpleadosService } from 'src/app/services/empleados.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-proveedor',
  templateUrl: './alta-proveedor.component.html',
  styleUrls: []
})
export class AltaProveedorComponent implements OnInit {

  formulario: FormGroup;
  proveedor: any;
  puestos: any[] = [];
  nombre: string = '';
  apellidoP: string = '';
  apellidoM: string = '';
  rfc: string = '';
  idUsuario:any;
  inputTouched: boolean = false;



  constructor(private router: Router,
    private fb: FormBuilder,
    private rolesService: RolesService,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService) {
      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        apellidoPaterno: ['', Validators.required],
        apellidoMaterno: ['', Validators.required],
        nombreCompania: ['', Validators.required],
        direccion: ['', Validators.required],
        rfc: ['', Validators.required],
        telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      });
    }

  ngOnInit(): void {
    if(this.isEditar()){
      this.obtenerProveedor();
    }
  }

  obtenerProveedor(){
    this.empleadosService.obtenerEmpleado(this.idUsuario).subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.proveedor = datos;
        this.cargarDatosFormulario();
        console.log(this.proveedor);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  cargarDatosFormulario() {
    this.formulario.setValue({
      nombre: this.proveedor.nombre,
      apellidoPaterno: this.proveedor.apellidoPaterno,
      apellidoMaterno: this.proveedor.apellidoMaterno,
      nombreCompania: this.proveedor.proveedor.nombre,
      direccion: this.proveedor.proveedor.direccion,
      rfc: this.proveedor.proveedor.rfc,
      telefono: this.proveedor.proveedor.telefono
    })
  }

  altaProveedor():void {

    console.log(this.formulario.value);
    this.empleadosService.altaProveedor(this.formulario.value).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se registro correctamente!', 'success');
        this.router.navigate(['/proveedores']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  actualizarProveedor():void {

    console.log(this.formulario.value);
    this.empleadosService.actualizarProveedor(this.idUsuario, this.formulario.value).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se actualizo correctamente!', 'success');
        this.router.navigate(['/proveedores']);
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
    this.rfc = this.rfc.toUpperCase();
  }

  soloNumeros(event: KeyboardEvent) {
    const input = event.key;
    if (isNaN(Number(input)) && input !== 'Backspace' && input !== 'Delete') {
      event.preventDefault();
    }
  }

  isEditar(): boolean {
    let bandera: boolean = false;
    this.route.paramMap.subscribe(param => {
      if(param.has("id")){
        this.idUsuario = this.route.snapshot.paramMap.get("id");
        bandera = true;
      }
    })
    return bandera;
  }

  onInputChange() {
    this.inputTouched = true;
  }

}
