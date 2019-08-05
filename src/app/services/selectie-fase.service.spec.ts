import { TestBed } from '@angular/core/testing';

import { SelectieFaseService } from './selectie-fase.service';

describe('SelectieFaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectieFaseService = TestBed.get(SelectieFaseService);
    expect(service).toBeTruthy();
  });
});
