import { Rol } from "../roles/Rol";


export class Empleado {
    idUsuario: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    activo: Boolean;
    rol: Rol;


    constructor(idUsuario: number, nombre: string, apellidoPaterno: string, apellidoMaterno: string, fechaIngreso: Date, fechaSalida: Date, activo: Boolean, rol: Rol) {
      this.idUsuario = idUsuario;
      this.nombre = nombre;
      this.apellidoPaterno = apellidoPaterno;
      this.apellidoMaterno = apellidoMaterno;
      this.fechaIngreso = fechaIngreso;
      this.fechaSalida = fechaSalida;
      this.activo = activo;
      this.rol = rol;
    }
}
