import {TestBed} from '@angular/core/testing';

import {TripsDbService} from './trips-db.service';

describe('TripsDbService', () => {
  let service: TripsDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
