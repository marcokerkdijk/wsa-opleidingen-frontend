import { TestBed } from '@angular/core/testing';

import { WachtwoordVergetenService } from './wachtwoord-vergeten.service';

describe('WachtwoordVergetenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WachtwoordVergetenService = TestBed.get(WachtwoordVergetenService);
    expect(service).toBeTruthy();
  });
});
