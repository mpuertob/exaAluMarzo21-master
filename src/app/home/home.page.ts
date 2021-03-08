import { PaseadorService } from './../providers/paseador.service';
import { AtraccionesService } from './../providers/atracciones.service';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Atraccion } from '../core/model/atraccion';
import { ListadoAtraccionesService } from '../providers/listado-atracciones.service';
import { Recorrido, Viaje } from '../core/model/recorrido';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  conjuntoAtracciones: Array<Atraccion> = [];
  atraccionSeleccionada: Atraccion;
  cantidadPersonas: number = 1;
  recorrido: Recorrido = new Recorrido();
  constructor(
    private atracciones: AtraccionesService,
    private paseador: PaseadorService,
    private route: Router,
    private listadoAtracciones: ListadoAtraccionesService
  ) {}

  navegarNuevaAtraccion() {
    this.atracciones.obtenerLongitud().then((longitud) => {
      alert(
        'En el nativo de Storage hay ' +
          longitud +
          ' numero de atracciones guardadas'
      );
    });
    this.route.navigate(['nueva-atraccion']);
  }
  navegarRepetir() {
    this.conjuntoAtracciones = this.listadoAtracciones.listadoAtracciones;
    let extrasNavegacion: NavigationExtras = {
      state: {
        lista: this.conjuntoAtracciones,
      },
    };
    this.route.navigate(['repetir'], extrasNavegacion);
  }
  obtenerAtraccionSeleccionada() {
    this.atraccionSeleccionada = this.listadoAtracciones.atraccionSeleccionada;
    return this.atraccionSeleccionada;
  }
  navegarMirarRecorrido() {
    let extrasNavegacion: NavigationExtras = {
      state: {
        listaViajes: this.recorrido.viajes,
      },
    };
    this.route.navigate(['recorrido'], extrasNavegacion);
  }
  generarViaje() {
    alert('Vamos a generar el viaje');
    let viaje: Viaje;
    let numeroPasos: number = 0;
    this.paseador
      .getSteps()
      .then((pasos) => {
        numeroPasos = pasos;
        viaje = new Viaje(
          this.atraccionSeleccionada,
          this.cantidadPersonas,
          numeroPasos
        );
        this.recorrido.insertarViaje(viaje);
      })
      .catch(() => {
        viaje = new Viaje(
          this.atraccionSeleccionada,
          this.cantidadPersonas,
          numeroPasos
        );
        this.recorrido.insertarViaje(viaje);
      });
  }
  borrarLista() {
    this.atracciones.borrarLista().then(() => {
      alert('Lista Borrada Correctamente');
    });
  }
}
