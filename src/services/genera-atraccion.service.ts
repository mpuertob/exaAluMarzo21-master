import { Atraccion } from './../app/core/model/atraccion';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneraAtraccionService {

  private nombres = [
    'Enviudador', 'solitario', 'la roca', 'el frenesi', 'rompe huesos', 'aburre manzanas', 'cuelga Pieles',
    'asusta Bebes', 'mata Abuelos', 'La cosquilla de la viuda'
  ];
  private preciomin = 1;
  private preciomax = 6;

  constructor() {
  }

  public generaAtraccion(): Atraccion {
    const nombre = this.getRandomArbitrary(0, this.nombres.length);
    return new Atraccion(this.nombres[nombre], this.getRandomArbitrary(0, 4), this.getRandomArbitrary(1, 6));
  }

  public getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min+1) + min);
  }
}
