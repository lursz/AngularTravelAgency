import { TestBed } from '@angular/core/testing';

import { TotalTripsCountService } from '../Services/total-trips-count.service';

describe('TotalTripsCountService', () => {
  let service: TotalTripsCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalTripsCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
