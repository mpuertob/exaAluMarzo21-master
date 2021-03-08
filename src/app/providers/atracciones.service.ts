import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Atraccion } from '../core/model/atraccion';

@Injectable({
  providedIn: 'root',
})
export class AtraccionesService {
  constructor(private Storage: Storage) {
    console.log(this.Storage.length());
  }
  guardarAtraccion(atraccion: Atraccion) {
    this.Storage.set(atraccion.nombre, atraccion).then(() => {
      alert('Atraccion Guardada correctamente en el nativo');
    });
  }
  obtenerLongitud(): Promise<number> {
    return this.Storage.length();
  }
  borrarLista(): Promise<void> {
    return this.Storage.clear();
  }
}
