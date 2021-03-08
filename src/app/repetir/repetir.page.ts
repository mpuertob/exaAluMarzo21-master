import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atraccion } from '../core/model/atraccion';
import { TipoAtraccion } from '../core/model/tipoAtraccion';
import { AtraccionesService } from '../providers/atracciones.service';
import { ListadoAtraccionesService } from '../providers/listado-atracciones.service';

@Component({
  selector: 'app-repetir',
  templateUrl: './repetir.page.html',
  styleUrls: ['./repetir.page.scss'],
})
export class RepetirPage implements OnInit {
  listaAtracciones: Array<Atraccion> = [];
  constructor(
    private atracciones: AtraccionesService,
    private route: Router,
    private rutaActivada: ActivatedRoute,
    private listadoAtraccionesService: ListadoAtraccionesService
  ) {}

  ngOnInit() {
    // this.rutaActivada.queryParams.subscribe(() => {
    //   let estado = this.route.getCurrentNavigation().extras.state;
    //   this.listaAtracciones = estado.lista;
    // });
    this.atracciones.obtenerKeysAlmacenadas().then((arrayKeys) => {
      arrayKeys.forEach((key) => {
        this.atracciones
          .obtenerAtraccionEnConcreto(key)
          .then((atraccionConcreta) => {
            this.listaAtracciones.push(
              new Atraccion(
                atraccionConcreta._nombre,
                atraccionConcreta._tipo,
                atraccionConcreta._precio
              )
            );
          });
      });
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
