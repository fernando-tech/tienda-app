import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaRequest } from './AltaRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcasService } from 'src/app/services/marcas.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta-productos.component.html',
  styleUrls: []
})
export class AltaProductosComponent implements OnInit {

  formulario: FormGroup;
  producto: any;
  marcas: any[] = [];
  categorias: any[] = [];
  altaRequest = new AltaRequest("","","",0,0,0,0);



  constructor(private router: Router,
    private fb: FormBuilder,
    private marcaService: MarcasService,
    private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private productosService: ProductosService) {
      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        codigo: ['', Validators.required],
        precio: ['', Validators.required],
        inventario: ['', Validators.required],
        marca: ['', Validators.required],
        categoria: ['', Validators.required],
      });
    }

  ngOnInit(): void {
  }

  altaProducto():void {
    this.altaRequest.nombre = this.formulario.value.nombre;
    this.altaRequest.descripcion = this.formulario.value.descripcion;
    this.altaRequest.codigo = this.formulario.value.codigo;
    this.altaRequest.precio = this.formulario.value.precio;

    console.log(this.formulario.value)
    /*this.empleadosService.altaEmpelado(this.altaRequest).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se registro correctamente!', 'success');
        this.router.navigate(['/personal']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );*/
  }

}
