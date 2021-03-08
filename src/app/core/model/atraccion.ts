import {TipoAtraccion} from './tipoAtraccion';

export class Atraccion {
  // tslint:disable-next-line:variable-name
  constructor(public _nombre: string, public _tipo: TipoAtraccion, public _precio: number) {
  }


  get nombre(): string {
    return this._nombre;
  }

  get tipo(): TipoAtraccion {
    return this._tipo;
  }

  get precio(): number {
    return this._precio;
  }

  set precio(value: number) {
    this._precio = value;
  }
}
