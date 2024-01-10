import {TestBed} from '@angular/core/testing';

import {TripCountingService} from './trip-counting.service';

describe('TripCountingService', () => {
  let service: TripCountingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripCountingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
