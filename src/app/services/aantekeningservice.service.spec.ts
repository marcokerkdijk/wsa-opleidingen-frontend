import { TestBed } from '@angular/core/testing';
import { AantekeningserviceService } from './aantekeningservice.service';

describe('AantekeningserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AantekeningserviceService = TestBed.get(AantekeningserviceService);
    expect(service).toBeTruthy();
  });
});
