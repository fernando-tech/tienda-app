import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: []
})
export class VentasComponent implements OnInit {

  total:number = 0;
  index:number = 0;
  codigo:any;
  producto:any;
  paginaActual: any = 0;
  productos: any[] = [];
  productosAgregados: any[] = [];
  formulario: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private productosService: ProductosService) {
      this.formulario = this.fb.group({
        codigo: ['', Validators.required],
        });
    }

    ngOnInit(): void {
      this.getProductos();
    }

    getProductos(): void {
      this.productosService.obtenerProductos(this.paginaActual).subscribe(
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

    agregarProducto(codigo: string){

      this.producto = this.productos.filter(elemento => elemento.codigoProducto.toUpperCase() === codigo.toUpperCase());

      if(this.producto[0] != undefined){
        this.productosAgregados.push(this.producto[0]);
        this.total = this.total + this.producto[0].precio;
      }

    }

    quitarProducto(numProducto: number, precio: number){
      this.productosAgregados.splice(numProducto, 1);
      this.total = this.total - precio;
    }

    finalizarCompra(){

      if(this.productosAgregados.length === 0){
        Swal.fire('Aviso', 'Necesita agregar productos', 'info');
        return;
      }

      Swal.fire('Venta exitosa', 'Total: $' + this.total + ' <small>MXN</small>', 'success');
      this.productosAgregados = [];
      this.total = 0;
      this.formulario.get('codigo')?.setValue('');
    }

    convertirAMayusculas(){
      this.codigo = this.codigo.toUpperCase();
    }
}
