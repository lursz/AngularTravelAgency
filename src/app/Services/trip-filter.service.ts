import { MoneyService } from './money.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';
import { TripCountingService } from './trip-counting.service';
import { TripsDbService } from './trips-db.service';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripFilterService {

  constructor(public tripCountingService: TripCountingService,
    private tripDbService: TripsDbService,
    private moneyService: MoneyService) { 
    }

resetFilter() {
  this.tripDbService.tripsMap.forEach((tripState, tripId) => {
    tripState.display = true;
  });
}
  
  filter(filter: Filter) {
    for (let trip of this.tripDbService.trips) {
      let countryMatch = filter.country ? filter.country.includes(trip.country) : true;

      let dateFromMatch = filter.startDate ? new Date(trip.start_date) >= new Date(filter.startDate) : true;
      let dateToMatch = filter.endDate ? new Date(trip.end_date) <= new Date(filter.endDate) : true;
      let dateMatch = dateFromMatch && dateToMatch;

      let priceFromMatch = filter.priceFrom ? trip.price >= filter.priceFrom : true;
      let priceToMatch = filter.priceTo ? trip.price <= filter.priceTo : true;
      let priceMatch = priceFromMatch && priceToMatch;

      let ratingMatch = filter.rating ? filter.rating[Math.round(this.tripDbService.safeGetMapValue(this.tripDbService.tripsMap, trip.id).rating)] : true;

      this.tripDbService.safeGetMapValue(this.tripDbService.tripsMap, trip.id).display = countryMatch && dateMatch && priceMatch && ratingMatch;
    }
  }
}
  export class Filter {
  constructor(public name: string, public country: string[], public startDate: string, public endDate: string, public priceFrom: number, public priceTo: number, public rating: boolean[]) {}
}






  // filter(filter: Filter) {
  //   console.log(filter);
  //   this.tripDbService.tripsMap.forEach((tripState, tripId) => {
  //     let trip = this.tripDbService.safeGetMapValue(this.tripDbService.tripsMap, tripId);
  //     let countryMatch = filter.country ? filter.country.includes(this.tripDbService.trips[tripId].country) : true;
  //     let dateFromMatch = filter.startDate ? new Date(this.tripDbService.trips[tripId].start_date) >= new Date(filter.startDate) : true;
  //     let dateToMatch = filter.endDate ? new Date(this.tripDbService.trips[tripId].end_date) <= new Date(filter.endDate) : true;
  //     let dateMatch = dateFromMatch && dateToMatch;

  //     let priceFromMatch = filter.priceFrom ? this.tripDbService.trips[tripId].price >= filter.priceFrom : true;
  //     let priceToMatch = filter.priceTo ? this.tripDbService.trips[tripId].price <= filter.priceTo : true;
  //     let priceMatch = priceFromMatch && priceToMatch;

  //     let ratingMatch = filter.rating ? tripState.rating >= filter.rating : true;

  //     tripState.display = countryMatch && dateMatch && priceMatch && ratingMatch;
  //     console.log(tripState.display);
  //   }
  //   );
  // }
  