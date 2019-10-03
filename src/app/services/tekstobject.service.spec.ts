import { TestBed } from '@angular/core/testing';
import { TekstobjectService } from './tekstobject.service';

describe('TekstobjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TekstobjectService = TestBed.get(TekstobjectService);
    expect(service).toBeTruthy();
  });
});
