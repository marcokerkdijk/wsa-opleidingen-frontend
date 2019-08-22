import { TestBed, async, inject } from '@angular/core/testing';

import { RecruiterAutorisatieGuard } from './recruiter-autorisatie.guard';

describe('RecruiterAutorisatieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecruiterAutorisatieGuard]
    });
  });

  it('should ...', inject([RecruiterAutorisatieGuard], (guard: RecruiterAutorisatieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
