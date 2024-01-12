import {MoneyService} from './money.service';
import {Injectable} from '@angular/core';
import {TripCountingService} from './trip-counting.service';
import {TripsDbService} from './trips-db.service';

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
      console.log(filter.country)
      let countryMatch = filter.country.length !== 0 ? filter.country.includes(trip.country) : true;

      let dateFromMatch = filter.startDate ? new Date(trip.start_date) >= new Date(filter.startDate) : true;
      let dateToMatch = filter.endDate ? new Date(trip.end_date) <= new Date(filter.endDate) : true;
      let dateMatch = dateFromMatch && dateToMatch;

      let priceFromMatch = filter.priceFrom ? trip.price >= filter.priceFrom : true;
      let priceToMatch = filter.priceTo ? trip.price <= filter.priceTo : true;
      let priceMatch = priceFromMatch && priceToMatch;

      let currentSum = this.tripDbService.getRatingsMap(trip.id).ratingSum;
      let currentCount = this.tripDbService.getRatingsMap(trip.id).ratingCount;
      let ratingMatch = filter.rating.some(t => t) ? currentCount !== 0 && filter.rating[Math.round(currentSum / currentCount) - 1] : true;
      this.tripDbService.getTripsMap(trip.id).display = countryMatch && dateMatch && priceMatch && ratingMatch;
    }
  }
}

export class Filter {
  constructor(public name: string, public country: string[], public startDate: string, public endDate: string, public priceFrom: number, public priceTo: number, public rating: boolean[]) {
  }
}

