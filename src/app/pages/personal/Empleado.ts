import { Rol } from "../roles/Rol";


export class Empleado {
    idEmpleado: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaIngreso: Date;
    fechaSalida: Date;
    activo: Boolean;
    rol: Rol;


    constructor(idEmpleado: number, nombre: string, apellidoPaterno: string, apellidoMaterno: string, fechaIngreso: Date, fechaSalida: Date, activo: Boolean, rol: Rol) {
      this.idEmpleado = idEmpleado;
      this.nombre = nombre;
      this.apellidoPaterno = apellidoPaterno;
      this.apellidoMaterno = apellidoMaterno;
      this.fechaIngreso = fechaIngreso;
      this.fechaSalida = fechaSalida;
      this.activo = activo;
      this.rol = rol;
    }
}
