import { Injectable } from '@angular/core';
import { TripsDbService } from './trips-db.service';

@Injectable({
  providedIn: 'root'
})
export class TripCountingService {
  totalReservedTripsCounter: number = 0;


  constructor() {
  }

  incrementTotalReservedTripsCounter() {
    this.totalReservedTripsCounter++;
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
      tripsMap.set(tripId, new TripCountingState(0, undefined, undefined, 0, 0, display));
    }

  }






}


/* -------------------------- Trip Counting State ------------------------- */
export class TripCountingState {
  constructor(public reservedCount: number, public lowestPrice?: boolean, public highestPrice?: boolean, public ratingSum: number = 0, public ratingCount: number = 0, public display: boolean = true) { }
}