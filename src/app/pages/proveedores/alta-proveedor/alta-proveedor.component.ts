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
  }

  altaEmpleado():void {

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

}
