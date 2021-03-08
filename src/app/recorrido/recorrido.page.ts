import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Viaje } from '../core/model/recorrido';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.page.html',
  styleUrls: ['./recorrido.page.scss'],
})
export class RecorridoPage implements OnInit {
  listaViajes: Array<Viaje> = [];
  constructor(public route: Router, private rutaActivada: ActivatedRoute) {}

  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      let estado = this.route.getCurrentNavigation().extras.state;
      this.listaViajes = estado.listaViajes;
    });
  }
  obtenerNombreAtraccion(viaje: Viaje) {
    return viaje.atraccion.nombre;
  }
}
