import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalTripsCountService {
  static totalReservedTripsCounter: number = 0;



  incrementTotalReservedTripsCounter() {
    TotalTripsCountService.totalReservedTripsCounter++;
  }

  decrementTotalReservedTripsCounter() {
    if (TotalTripsCountService.totalReservedTripsCounter > 0)
    TotalTripsCountService.totalReservedTripsCounter--;
  }
}
