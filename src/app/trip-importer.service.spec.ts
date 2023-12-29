import { TestBed } from '@angular/core/testing';

import { TripImporterService } from './Services/trip-importer.service';

describe('TripImporterService', () => {
  let service: TripImporterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripImporterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
