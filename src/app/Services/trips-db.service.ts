import { Injectable } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';
import { TripCountingState } from './trip-counting.service';
import { TripImporterService } from './trip-importer.service';

@Injectable({
  providedIn: 'root'
})
export class TripsDbService {
  trips: Trip[] = [];
  tripsMap: Map<number, TripCountingState> = new Map<number, TripCountingState>();
  service: TripImporterService;
  possibleRatingValues: number[] = [1, 2, 3, 4, 5];
  possibleCountries: string[] = [];

  safeGetMapValue(Map: Map<number, TripCountingState>, key: number): TripCountingState {
    let value = Map.get(key);
    if (value)
        return value;
    return new TripCountingState(0, undefined, undefined);
}

init(service: TripImporterService) {
    this.trips = this.service.getTrips();
    for (let i = 0; i < this.trips.length; i++) {
        this.trips[i].id = i;
        this.tripsMap.set(i, new TripCountingState(0, undefined, undefined));
    }
    this.getMostExpensiveTrip();
    this.getCheapestTrip();
    this.loadPossibleCountries();
}
constructor(service: TripImporterService) {
    this.service = service;
    this.service.eventEmitter.subscribe(() => {
        this.init(service);
    });
    this.init(service);
}

rateTrip(tripId: number, rating: number) {
    this.safeGetMapValue(this.tripsMap, tripId).rating = rating;
}

loadPossibleCountries() {

    for (let trip of this.trips) {
        if (!this.possibleCountries.includes(trip.country)) {
            this.possibleCountries.push(trip.country);
        }
    }
}

addTrip(trip: Trip) {
    trip.id = this.trips.length;
    this.trips.push(trip);
    this.tripsMap.set(this.trips.length - 1, new TripCountingState(0, undefined, undefined));
    this.getMostExpensiveTrip();
    this.getCheapestTrip();
}

removeTrip(tripId: number) {
    this.trips.splice(tripId, 1);
    this.tripsMap.delete(tripId);
    this.getMostExpensiveTrip();
    this.getCheapestTrip();
}

getMostExpensiveTrip(): number {
    let maxPrice = 0;
    let maxPriceIndex = 0;
    for (let i = 0; i < this.trips.length; i++) {
        this.safeGetMapValue(this.tripsMap, i).highestPrice = false;
        if (this.trips[i].price > maxPrice) {
            maxPrice = this.trips[i].price;
            maxPriceIndex = i;
        }
    }
    this.safeGetMapValue(this.tripsMap, maxPriceIndex).highestPrice = true;
    return maxPriceIndex;
}

getCheapestTrip(): number {
    let minPrice = 0;
    let minPriceIndex = 0;
    for (let i = 0; i < this.trips.length; i++) {
        this.safeGetMapValue(this.tripsMap, i).lowestPrice = false;
        if (this.trips[i].price < minPrice) {
            minPrice = this.trips[i].price;
            minPriceIndex = i;
        }
    }
    this.safeGetMapValue(this.tripsMap, minPriceIndex).lowestPrice = true;
    return minPriceIndex;

}
}
