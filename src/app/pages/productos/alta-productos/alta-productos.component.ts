import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AltaRequest } from './AltaRequest';
import { ActivatedRoute, Router } from '@angular/router';
import { MarcasService } from 'src/app/services/marcas.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta',
  templateUrl: './alta-productos.component.html',
  styleUrls: []
})
export class AltaProductosComponent implements OnInit {

  precioProducto: number = 0;
  cantidadProducto: number = 0;
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
    this.obtenerCategorias();
    this.obtenerMarcas();
  }

  obtenerCategorias(): void{
    this.categoriaService.obtenerCategorias().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.categorias = datos;
        console.log(this.categorias);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  obtenerMarcas(): void{
    this.marcaService.obtenerMarcas().subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.marcas = datos;
        console.log(this.marcas);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  altaProducto():void {
    this.altaRequest.nombre = this.formulario.value.nombre;
    this.altaRequest.descripcion = this.formulario.value.descripcion;
    this.altaRequest.codigo = this.formulario.value.codigo;
    this.altaRequest.precio = this.formulario.value.precio;
    this.altaRequest.inventario = this.formulario.value.inventario;
    this.altaRequest.categoria = this.formulario.value.categoria;
    this.altaRequest.marca = this.formulario.value.marca;

    console.log(this.formulario.value)
    this.productosService.altaProductos(this.altaRequest).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se registro correctamente!', 'success');
        this.router.navigate(['/productos']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

}
