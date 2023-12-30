import { MoneyService } from './money.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';
import { TripCountingService } from './trip-counting.service';
import { TripsDbService } from './trips-db.service';

@Injectable({
  providedIn: 'root'
})
export class TripFilterService {

  constructor(public tripCountingService: TripCountingService,
    private tripDbService: TripsDbService,
    private moneyService: MoneyService) {  }

    // filterTrips(filter: Filter){
    //   this.trips = this.tripsOriginal.filter((trip) => {
    //     let name = trip.name.toLowerCase().includes(filter.name.toLowerCase());
    //     let country = filter.country.length === 0 || filter.country.includes(trip.country);
    //     let startDate = filter.startDate === '' || filter.startDate <= trip.startDate;
    //     let endDate = filter.endDate === '' || filter.endDate >= trip.endDate;
    //     let priceFrom = filter.priceFrom === 0 || filter.priceFrom <= trip.unitPrice;
    //     let priceTo = filter.priceTo === 0 || filter.priceTo >= trip.unitPrice;
    //     let rating = filter.rating.length === 0 || filter.rating.includes(Math.floor(trip.rating));
    //     return name && country && startDate && endDate && priceFrom && priceTo && rating;
    //   });
    //   this.tripsObservable.next(this.trips);
    //   console.log({
    //     trips: this.trips,
    //     filter: filter
    //   });
    // }
}
