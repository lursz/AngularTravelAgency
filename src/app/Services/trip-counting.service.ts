import { Injectable } from '@angular/core';
import { TripsDbService } from './trips-db.service';

@Injectable({
  providedIn: 'root'
})
export class TripCountingService {
  totalReservedTripsCounter: number = 0;


  constructor() {
    console.log("TripCountingService constructor");
    console.log(this.totalReservedTripsCounter);
  }

  incrementTotalReservedTripsCounter() {
    this.totalReservedTripsCounter++;
    console.log(this.totalReservedTripsCounter);
  }

  decrementTotalReservedTripsCounter() {
    if (this.totalReservedTripsCounter > 0)
      this.totalReservedTripsCounter--;
  }


  hideOrShowTrip(tripsMap: Map<number, TripCountingState>, tripId: number, display: boolean) {
    let tripCountingState = tripsMap.get(tripId);
    if (tripCountingState) {
      tripCountingState.display = display;
    } else {
      tripsMap.set(tripId, new TripCountingState(0, undefined, undefined, 0, display));
    }

  }






}


/* -------------------------- Trip Counting State ------------------------- */
export class TripCountingState {
  display: boolean;
  reservedCount: number;
  rating?: number;

  lowestPrice?: boolean;
  highestPrice?: boolean;

  constructor(reservedCount: number, lowestPrice?: boolean, highestPrice?: boolean, rating: number = 0, display: boolean = true) {
    this.reservedCount = reservedCount;
    this.lowestPrice = lowestPrice;
    this.highestPrice = highestPrice;
    this.rating = rating;
    this.display = display;

  }
}