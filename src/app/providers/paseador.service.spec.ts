import { TestBed } from '@angular/core/testing';

import { PaseadorService } from './paseador.service';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';
describe('PaseadorService', () => {
  let service: PaseadorService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    let stepcounter: Stepcounter = new Stepcounter();
    service = new PaseadorService(stepcounter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('probando rangos', () => {
    let limiteMinimo = false;
    let limiteMaximo = false;
    let minimo = 0;
    let maximo = 5;
    for (let i = 0; i < 900; i++) {
      let numeroAleatorio = service.obtenerNumeroAleatorio(minimo, maximo);
      if (numeroAleatorio === minimo) {
        limiteMinimo = true;
      }
      if (numeroAleatorio === maximo) {
        limiteMaximo = true;
      }
      expect(numeroAleatorio).toBeLessThanOrEqual(maximo);
      expect(numeroAleatorio).toBeGreaterThanOrEqual(minimo);
    }
    expect(limiteMinimo).toBeTrue();
    expect(limiteMaximo).toBeTrue();
  });
});
