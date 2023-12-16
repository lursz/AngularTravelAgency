import { Injectable } from '@angular/core';
import { Trip } from './trip_interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripImporterService {

  trips: Trip[] = []

  constructor(http: HttpClient) {
    http.get<Trip[]>('/assets/trips_list.json').subscribe(result => {
      this.trips = result;
    });
  }
}
