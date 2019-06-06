import { TestBed } from '@angular/core/testing';

import { MisRutasService } from './mis-rutas.service';

describe('MisRutasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MisRutasService = TestBed.get(MisRutasService);
    expect(service).toBeTruthy();
  });
});
