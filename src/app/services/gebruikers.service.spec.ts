import { TestBed } from '@angular/core/testing';
import { GebruikersService } from './gebruikers.service';

describe('GebruikersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GebruikersService = TestBed.get(GebruikersService);
    expect(service).toBeTruthy();
  });
});
