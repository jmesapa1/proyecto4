import { TestBed } from '@angular/core/testing';

import { CrearRutaService } from './crear-ruta.service';

describe('CrearRutaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearRutaService = TestBed.get(CrearRutaService);
    expect(service).toBeTruthy();
  });
});
