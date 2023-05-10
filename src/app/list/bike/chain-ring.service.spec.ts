import { TestBed } from '@angular/core/testing';

import { ChainRingService } from './chain-ring.service';

describe('ChainRingService', () => {
  let service: ChainRingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChainRingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
