import { TestBed } from '@angular/core/testing';
import { OpdrachtService } from './opdracht.service';

describe('OpdrachtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpdrachtService = TestBed.get(OpdrachtService);
    expect(service).toBeTruthy();
  });
});
