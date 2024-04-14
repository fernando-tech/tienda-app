
export class AltaRequest {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  puesto: string


  constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, puesto: string){
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
    this.puesto = puesto;
  }
}
