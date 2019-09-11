import { TestBed } from '@angular/core/testing';
import { UitwerkingService } from './uitwerking.service';

describe('UitwerkingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UitwerkingService = TestBed.get(UitwerkingService);
    expect(service).toBeTruthy();
  });
});
