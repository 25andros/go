import { TestBed } from '@angular/core/testing';

import { DrivetrainService } from './drivetrain.service';

describe('DrivetrainService', () => {
  let service: DrivetrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrivetrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
