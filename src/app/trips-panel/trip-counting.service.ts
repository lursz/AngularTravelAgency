import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripCountingService {
static totalReservedTripsCounter: number = 0;
ratings: number[] = [1, 2, 3, 4, 5];


static incrementTotalReservedTripsCounter() {
  TripCountingService.totalReservedTripsCounter++;
}

static decrementTotalReservedTripsCounter() {
 if (TripCountingService.totalReservedTripsCounter > 0)
  TripCountingService.totalReservedTripsCounter--;
}


hideOrShowTrip(tripsMap: Map<number, TripCountingState>, tripId: number, display: boolean) {
  let tripCountingState = tripsMap.get(tripId);
  if (tripCountingState) {
    tripCountingState.display = display;
  } else {
    tripsMap.set(tripId, new TripCountingState(0, undefined, undefined, 0, display));
  }

}

setRating(tripsMap: Map<number, TripCountingState>, tripId: number, rating: number) {
  let tripCountingState = tripsMap.get(tripId);
  if (tripCountingState) {
    tripCountingState.rating = rating;
  } else {
    tripsMap.set(tripId, new TripCountingState(0, undefined, undefined, rating));
  }

}





}


/* -------------------------- Trip Counting State ------------------------- */
export class TripCountingState{
  display: boolean;
  reservedCount: number;
  rating?: number;

  lowestPrice?: boolean;
  highestPrice?: boolean;

  constructor(reservedCount: number, lowestPrice?: boolean, highestPrice?: boolean, rating: number = 0, display: boolean = true){
    this.reservedCount = reservedCount;
    this.lowestPrice = lowestPrice;
    this.highestPrice = highestPrice;
    this.rating = rating;
    this.display = display;
    
  }
}