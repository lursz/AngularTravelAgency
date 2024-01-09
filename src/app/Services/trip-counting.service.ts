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


}


/* -------------------------- Trip Counting State ------------------------- */
export class TripCountingState {
  constructor(public reservedCount: number, public lowestPrice?: boolean, public highestPrice?: boolean, public display: boolean = true) { }
  // constructor(public reservedCount: number, public lowestPrice?: boolean, public highestPrice?: boolean, public ratingSum: number = 0, public ratingCount: number = 0, public comments: Comment[] = [], public display: boolean = true) { }
}

export class RatingState {
  constructor(public ratingSum: number = 0, public ratingCount: number = 0, public comments: Comment[]) { }
}

export class Comment {
  constructor(public author: string, public content: string, public date: string) { }
}