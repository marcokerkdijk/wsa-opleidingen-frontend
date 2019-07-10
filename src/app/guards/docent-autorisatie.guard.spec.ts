import { TestBed, async, inject } from '@angular/core/testing';

import { DocentAutorisatieGuard } from './docent-autorisatie.guard';

describe('DocentAutorisatieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DocentAutorisatieGuard]
    });
  });

  it('should ...', inject([DocentAutorisatieGuard], (guard: DocentAutorisatieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
