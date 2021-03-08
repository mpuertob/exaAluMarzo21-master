import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Atraccion } from '../core/model/atraccion';
import { TipoAtraccion } from '../core/model/tipoAtraccion';
import { GeneraAtraccionService } from '../providers/genera-atraccion.service';
import { ListadoAtraccionesService } from '../providers/listado-atracciones.service';
import { PipePipe } from './pipe.pipe';
@Component({
  selector: 'app-nueva-atraccion',
  templateUrl: './nueva-atraccion.page.html',
  styleUrls: ['./nueva-atraccion.page.scss'],
})
export class NuevaAtraccionPage implements OnInit {
  atraccion: Atraccion;
  constructor(
    private generaAtraccionService: GeneraAtraccionService,
    private route: Router,
    private listadoAtracciones: ListadoAtraccionesService
  ) {}

  ngOnInit() {}
  generarAtraccion() {
    this.atraccion = this.generaAtraccionService.generaAtraccion();
    console.log(this.atraccion);
  }
  obtenerTipoAtraccion(numero: number) {
    let array = Object.values(TipoAtraccion);
    return array[numero];
  }
  aumentarListadoAtracciones() {
    alert('Pasando atraccion');
    console.log(this.listadoAtracciones);
    this.listadoAtracciones.aumentarAtracciones(this.atraccion);
    console.log(this.listadoAtracciones);
    this.route.navigate(['home']);
  }
}
