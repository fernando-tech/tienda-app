
export class AltaRequest {

  nombre: string;
  descripcion: string;
  codigo: string;
  precio: number;
  inventario: number;
  marca: number;
  categoria: number;

  constructor(nombre: string,
    descripcion: string,
    codigo: string,
    precio: number,
    inventario: number,
    marca: number,
    categoria: number){
      this.nombre =nombre;
      this.descripcion =descripcion;
      this.codigo = codigo;
      this.precio = precio;
      this.inventario = inventario;
      this.marca =marca;
      this.categoria=categoria;
    }

}
