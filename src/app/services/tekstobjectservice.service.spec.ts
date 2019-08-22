import { TestBed } from '@angular/core/testing';

import { TekstobjectserviceService } from './tekstobjectservice.service';

describe('TekstobjectserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TekstobjectserviceService = TestBed.get(TekstobjectserviceService);
    expect(service).toBeTruthy();
  });
});
