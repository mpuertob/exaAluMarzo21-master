import {TestBed} from '@angular/core/testing';

import {GeneraAtraccionService} from './genera-atraccion.service';

describe('GeneraAtraccionService', () => {
  let service: GeneraAtraccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneraAtraccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('haciendo las pruebas', () => {
    let bajo = false, alto = false;
    const min = 0, max = 5;
    for (let i = 0; i < 100; i++) {
      const experimento = service.getRandomArbitrary(min, max);
      console.log(experimento);
      if (experimento === min) {
        bajo = true;
      }
      if (experimento === max) {
        alto = true;
      }
      expect(experimento).toBeLessThanOrEqual(max);
      expect(experimento).toBeGreaterThanOrEqual(min);
    }
    expect(bajo).toBeTrue();
    expect(alto).toBeTrue();
  });
});
