import {Injectable} from '@angular/core';
import {Trip} from '../Components/trip/trip_interface';
import {Comment, RatingState, TripCountingState} from './trip-counting.service';
import {TripImporterService} from './trip-importer.service';

@Injectable({
  providedIn: 'root'
})
export class TripsDbService {
  trips: Trip[] = [];
  ratingMap: Map<number, RatingState> = new Map<number, RatingState>();
  tripsMap: Map<number, TripCountingState> = new Map<number, TripCountingState>();
  service: TripImporterService;
  possibleCountries: string[] = [];

  constructor(service: TripImporterService) {
    this.service = service;
    this.service.eventEmitter.subscribe(() => {
      this.init(service);
    });
    this.init(service);
  }

  getTripsMap(key: number): TripCountingState {
    let value = this.tripsMap.get(key);
    if (value)
      return value;
    return new TripCountingState(0, undefined, undefined);
  }

  getRatingsMap(key: number): RatingState {
    let value = this.ratingMap.get(key);
    if (value)
      return value;
    return new RatingState(0, 0, []);
  }

  init(service: TripImporterService) {
    this.trips = this.service.trips;
    for (let i = 0; i < this.trips.length; i++) {
      this.trips[i].id = i;
      this.tripsMap.set(i, new TripCountingState(0, undefined, undefined));
    }
    this.ratingMap = this.service.ratings;
    this.getMostExpensiveTrip();
    this.getCheapestTrip();
    this.loadPossibleCountries();
  }

  rateTrip(tripId: number, rating: number) {

    this.service.rateTrip(tripId, rating); //firebase
    this.getRatingsMap(tripId).ratingSum += rating;
    this.getRatingsMap(tripId).ratingCount++;
  }

  addComment(tripId: number, comment: Comment) {
    this.service.addComment(tripId, comment); //firebase
    this.getRatingsMap(tripId).comments.push(comment);
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
    this.service.addTrip(trip); //firebase
    this.tripsMap.set(this.trips.length - 1, new TripCountingState(0, undefined, undefined));
    this.getMostExpensiveTrip();
    this.getCheapestTrip();

  }

  removeTrip(tripId: number) {
    this.service.removeTrip(this.trips[tripId]); //firebase
    this.trips.splice(tripId, 1);
    this.tripsMap.delete(tripId);
    this.getMostExpensiveTrip();
    this.getCheapestTrip();
  }

  getMostExpensiveTrip(): number {
    let maxPrice = 0;
    let maxPriceIndex = 0;
    for (let i = 0; i < this.trips.length; i++) {
      this.getTripsMap(i).highestPrice = false;
      if (this.trips[i].price > maxPrice) {
        maxPrice = this.trips[i].price;
        maxPriceIndex = i;
      }
    }
    this.getTripsMap(maxPriceIndex).highestPrice = true;
    return maxPriceIndex;
  }

  getCheapestTrip(): number {
    let minPrice = 0;
    let minPriceIndex = 0;
    for (let i = 0; i < this.trips.length; i++) {
      this.getTripsMap(i).lowestPrice = false;
      if (this.trips[i].price < minPrice) {
        minPrice = this.trips[i].price;
        minPriceIndex = i;
      }
    }
    this.getTripsMap(minPriceIndex).lowestPrice = true;
    return minPriceIndex;
  }

  getReservedCount(tripId: number): number {
    return this.getTripsMap(tripId).reservedCount;
  }

  incrementReservedCount(tripId: number) {
    this.getTripsMap(tripId).reservedCount++;
  }

  decrementReservedCount(tripId: number) {
    this.getTripsMap(tripId).reservedCount--;
  }
}
