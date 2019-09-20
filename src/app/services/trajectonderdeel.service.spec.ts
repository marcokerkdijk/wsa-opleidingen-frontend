import { TestBed } from '@angular/core/testing';

import { TrajectonderdeelService } from './trajectonderdeel.service';

describe('TrajectonderdeelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrajectonderdeelService = TestBed.get(TrajectonderdeelService);
    expect(service).toBeTruthy();
  });
});
