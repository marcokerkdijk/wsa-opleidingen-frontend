import { TestBed } from '@angular/core/testing';
import { AutenticatieService } from './autenticatie.service';

describe('AutenticatieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticatieService = TestBed.get(AutenticatieService);
    expect(service).toBeTruthy();
  });
});
