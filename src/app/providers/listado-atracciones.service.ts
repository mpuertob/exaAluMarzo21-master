import { Injectable } from '@angular/core';
import { Atraccion } from '../core/model/atraccion';

@Injectable({
  providedIn: 'root',
})
export class ListadoAtraccionesService {
  private _listadoAtracciones: Array<Atraccion> = [];
  private _atraccionSeleccionada: Atraccion;
  constructor() {}
  aumentarAtracciones(atraccion: Atraccion) {
    this._listadoAtracciones.push(atraccion);
  }
  public get listadoAtracciones() {
    return this._listadoAtracciones;
  }
  asignarAtraccionSeleccionada(atraccion: Atraccion) {
    this._atraccionSeleccionada = atraccion;
  }
  public get atraccionSeleccionada() {
    return this._atraccionSeleccionada;
  }
}
