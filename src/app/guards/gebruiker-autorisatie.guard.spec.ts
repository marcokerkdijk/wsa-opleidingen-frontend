import { TestBed, async, inject } from '@angular/core/testing';

import { GebruikerAutorisatieGuard } from './gebruiker-autorisatie.guard';

describe('GebruikerAutorisatieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GebruikerAutorisatieGuard]
    });
  });

  it('should ...', inject([GebruikerAutorisatieGuard], (guard: GebruikerAutorisatieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
