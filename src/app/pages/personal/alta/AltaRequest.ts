
export class AltaRequest {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  puesto: string;
  estatus: boolean;


  constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, puesto: string, estatus:boolean){
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.puesto = puesto;
    this.estatus = estatus;
  }
}
