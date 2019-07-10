import { TestBed, async, inject } from '@angular/core/testing';

import { AdminAutorisatieGuard } from './admin-autorisatie.guard';

describe('AdminAutorisatieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAutorisatieGuard]
    });
  });

  it('should ...', inject([AdminAutorisatieGuard], (guard: AdminAutorisatieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
