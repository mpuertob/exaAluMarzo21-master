import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atraccion } from '../core/model/atraccion';
import { TipoAtraccion } from '../core/model/tipoAtraccion';
import { ListadoAtraccionesService } from '../providers/listado-atracciones.service';

@Component({
  selector: 'app-repetir',
  templateUrl: './repetir.page.html',
  styleUrls: ['./repetir.page.scss'],
})
export class RepetirPage implements OnInit {
  listaAtracciones: Array<Atraccion> = [];
  constructor(
    private route: Router,
    private rutaActivada: ActivatedRoute,
    private listadoAtraccionesService: ListadoAtraccionesService
  ) {}

  ngOnInit() {
    this.rutaActivada.queryParams.subscribe(() => {
      let estado = this.route.getCurrentNavigation().extras.state;
      this.listaAtracciones = estado.lista;
    });
  }
  obtenerTipoAtraccion(numero: number) {
    let array = Object.values(TipoAtraccion);
    return array[numero];
  }
  seleccionarAtraccion(atraccion: Atraccion) {
    alert('Atraccion seleccionada');
    this.listadoAtraccionesService.asignarAtraccionSeleccionada(atraccion);
    this.route.navigate(['home']);
  }
}
