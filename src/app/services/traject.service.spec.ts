import { TestBed } from '@angular/core/testing';
import { TrajectService } from './traject.service';

describe('TrajectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrajectService = TestBed.get(TrajectService);
    expect(service).toBeTruthy();
  });
});
