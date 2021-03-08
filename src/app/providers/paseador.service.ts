import { Stepcounter } from '@ionic-native/stepcounter/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaseadorService {
  constructor(private stepcounter: Stepcounter) {
    console.log(this.stepcounter);
  }
  getSteps(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      this.stepcounter
        .getTodayStepCount()
        .then((numeroAleatorio) => {
          console.log(numeroAleatorio);
          resolve(numeroAleatorio);
        })
        .catch(() => {
          reject(0);
        });
    });
  }
  obtenerNumeroAleatorio(min: number, max: number): number {
    return Number.parseInt((Math.random() * (max - min) + min).toFixed(0));
  }
}
