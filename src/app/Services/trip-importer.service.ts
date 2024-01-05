import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';

@Injectable({
  providedIn: 'root'
})
export class TripImporterService {

  trips: Trip[] = []
  eventEmitter: EventEmitter<void> = new EventEmitter();

  constructor(http: HttpClient) {
    http.get<Trip[]>('/assets/trips_list.json').subscribe(result => {
      console.log(result);

      this.trips = result;
      this.eventEmitter.emit();
    });
  }

  getTrips() {
    return this.trips;
  }
}
