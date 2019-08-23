import { TestBed } from '@angular/core/testing';

import { OpdrachtenserviceService } from './opdrachtenservice.service';

describe('OpdrachtenserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdrachtenserviceService = TestBed.get(OpdrachtenserviceService);
    expect(service).toBeTruthy();
  });
});
