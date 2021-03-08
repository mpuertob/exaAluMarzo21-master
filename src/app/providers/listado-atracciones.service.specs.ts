import { TestBed } from '@angular/core/testing';

import { ListadoAtraccionesService } from './listado-atracciones.service';

describe('ListadoAtraccionesService', () => {
  let service: ListadoAtraccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoAtraccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
