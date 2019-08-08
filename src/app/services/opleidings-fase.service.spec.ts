import { TestBed } from '@angular/core/testing';

import { OpleidingsFaseService } from './opleidings-fase.service';

describe('OpleidingsFaseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpleidingsFaseService = TestBed.get(OpleidingsFaseService);
    expect(service).toBeTruthy();
  });
});
