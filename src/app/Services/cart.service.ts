import {PurchaseHistoryService} from './purchase-history.service';
import {TripsDbService} from './trips-db.service';
import {Injectable} from '@angular/core';
import {Trip} from '../Components/trip/trip_interface';
import {TripCountingService} from './trip-counting.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Trip[] = [];
  totalCost: number = 0;

  constructor(public tripsDbService: TripsDbService, public purchaseHistoryService: PurchaseHistoryService, public tripCountingService: TripCountingService) {
  }

  addToCart(trip: Trip) {
    this.items.push(trip);
    this.calculateTotalCost();
  }

  removeFromCart(trip: Trip) {
    this.items.splice(this.items.indexOf(trip), 1);
    this.calculateTotalCost();
  }

  buy() {
    this.items.forEach(trip => {
        this.purchaseHistoryService.addToHistory(trip);
      }
    );
    this.items.forEach(trip => {
      const selectedTrip = this.tripsDbService.trips.find(t => t.id == trip.id);
      if (selectedTrip) {
        selectedTrip.max_participants -= this.tripsDbService.getTripsMap(trip.id).reservedCount;
        this.tripsDbService.getTripsMap(trip.id).reservedCount = 0;
      }
    });

    this.items = [];
    this.calculateTotalCost();
    this.tripCountingService.totalReservedTripsCounter = 0;

  }


  calculateTotalCost() {
    this.totalCost = 0;
    this.items.forEach(trip => {
      this.totalCost += trip.price * this.tripsDbService.getTripsMap(trip.id).reservedCount;
    });
  }
}
