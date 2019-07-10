import { TestBed, async, inject } from '@angular/core/testing';

import { StudentAutorisatieGuard } from './student-autorisatie.guard';

describe('StudentAutorisatieGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentAutorisatieGuard]
    });
  });

  it('should ...', inject([StudentAutorisatieGuard], (guard: StudentAutorisatieGuard) => {
    expect(guard).toBeTruthy();
  }));
});
