import { TestBed } from '@angular/core/testing';

import { DatosMascotasService } from './datos-mascotas.service';

describe('DatosMascotasService', () => {
  let service: DatosMascotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosMascotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
