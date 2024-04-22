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

  codigoProducto: string = '';
  nombreProducto: string = '';
  inputTouched: boolean = false;
  precioProducto: number = 0;
  cantidadProducto: number = 0;
  formulario: FormGroup;
  producto: any;
  productos: any[] = [];
  marcas: any[] = [];
  categorias: any[] = [];
  altaRequest = new AltaRequest("","","",0,0,0,0);
  idProducto:any;



  constructor(private router: Router,
    private fb: FormBuilder,
    private marcaService: MarcasService,
    private categoriaService: CategoriasService,
    private route: ActivatedRoute,
    private productosService: ProductosService) {
      this.formulario = this.fb.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        codigo: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
        precio: ['', Validators.required],
        inventario: ['', Validators.required],
        marca: ['', Validators.required],
        categoria: ['', Validators.required],
      });
    }

  ngOnInit(): void {
    if(this.isEditar()){
      this.obtenerProducto();
    }
    this.obtenerProductos();
    this.obtenerCategorias();
    this.obtenerMarcas();
  }

  cargarDatosFormulario() {
    this.formulario.setValue({
      nombre: this.producto.nombreProducto,
      descripcion: this.producto.descripcion,
      codigo: this.producto.codigoProducto,
      precio: this.producto.precio,
      inventario: this.producto.inventario,
      marca: this.producto.marca.idMarca,
      categoria: this.producto.categoria.idCategoria
    })
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

  obtenerProductos(){
    this.productosService.obtenerProductos(0).subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.productos = datos.content;
        console.log(this.productos);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  obtenerProducto(){
    this.productosService.obtenerProducto(this.idProducto).subscribe(
      (datos) => {
        // Manejar los datos recibidos
        this.producto = datos;
        this.cargarDatosFormulario();
        console.log(this.producto);
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

    console.log("ALTA")
    console.log(this.formulario)
    // validar si el codigo del producto se repite
    this.producto =  this.productos.filter(elemento => elemento.codigoProducto.toUpperCase() === this.formulario.value.codigo.toUpperCase());

    if(this.producto[0] != undefined){
      this.formulario.get('codigo')?.setErrors({ 'invalid': true });
      this.producto.nombreProducto = this.formulario.value.nombre;
      this.producto.descripcion = this.formulario.value.descripcion;
      this.producto.codigoProducto = this.formulario.value.codigo;
      this.producto.precio = this.formulario.value.precio;
      this.producto.inventario = this.formulario.value.inventario;
      Swal.fire('Error', 'El c&oacute;digo del producto que ingreso ya existe, favor de ingresar uno distinto.', 'warning');
      return;
    }

    this.productosService.altaProductos(this.formulario.value).subscribe(
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

  actualizarProducto(){

    // validar si el codigo del producto se repite
    this.producto =  this.productos.filter(elemento => elemento.codigoProducto.toUpperCase() === this.formulario.value.codigo.toUpperCase());

    if((this.producto[0] != undefined) && (this.idProducto != this.producto[0].idProducto)){
      this.formulario.get('codigo')?.setErrors({ 'invalid': true });
      this.producto.nombreProducto = this.formulario.value.nombre;
      this.producto.descripcion = this.formulario.value.descripcion;
      this.producto.codigoProducto = this.formulario.value.codigo;
      this.producto.precio = this.formulario.value.precio;
      this.producto.inventario = this.formulario.value.inventario;
      Swal.fire('Error', 'El c&oacute;digo del producto que ingreso ya existe, favor de ingresar uno distinto.', 'warning');
      return;
    }

    this.productosService.actualizarProducto(this.idProducto, this.formulario.value).subscribe(
      (datos) => {
        Swal.fire('Correcto', '¡Se actualizo correctamente!', 'success');
        this.router.navigate(['/productos']);
      },
      (error) => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      }
    );
  }

  isEditar(): boolean {
    let bandera: boolean = false;
    this.route.paramMap.subscribe(param => {
      if(param.has("id")){
        this.idProducto = this.route.snapshot.paramMap.get("id");
        bandera = true;
      }
    })
    return bandera;
  }

  onInputChange() {
    this.inputTouched = true;
  }

  convertirAMayusculas(){
    this.codigoProducto = this.codigoProducto.toUpperCase();
    this.nombreProducto = this.nombreProducto.toUpperCase();
  }

}
