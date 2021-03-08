import {Atraccion} from './atraccion';

export class Viaje{
  constructor(public atraccion:Atraccion,public personas:number,public pasos:number) {
  }
}
export class Recorrido{
  public viajes:Array<Viaje>;
  constructor() {
    this.viajes=new Array<Viaje>();
  }

  insertarViaje(viaje:Viaje){
    this.viajes.push(viaje);
  }
}
