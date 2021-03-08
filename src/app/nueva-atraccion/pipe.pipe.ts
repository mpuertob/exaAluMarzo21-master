import { Pipe, PipeTransform } from '@angular/core';
import { TipoAtraccion } from '../core/model/tipoAtraccion';

@Pipe({
  name: 'pipe',
})
export class PipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): TipoAtraccion {
    if (value == 0) {
      return TipoAtraccion.Montana;
    }
    if (value == 1) {
      return TipoAtraccion.coches;
    }
    if (value == 2) {
      return TipoAtraccion.noria;
    }
    if (value == 3) {
      return TipoAtraccion.rueda;
    }
    if (value == 4) {
      return TipoAtraccion.peligro;
    }

    return null;
  }
}
