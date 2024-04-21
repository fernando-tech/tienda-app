import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: []
})
export class ProductosComponent implements OnInit {

  productos: any[] = [];
  paginaActual: any = 0;
  elementosPorPagina:any = 10;

  constructor(private productosService: ProductosService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

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

  eliminarProducto(idProducto: any){
    Swal.fire({
      title: '¿Esta seguro?',
      text: "El producto sera eliminado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.productosService.eliminarProducto(idProducto).subscribe(
          (datos) => {
            Swal.fire('Correcto', '¡Se elimino correctamente!', 'success').then(() => {
              this.getProductos();
            });
          });
      }
    })
  }

}
