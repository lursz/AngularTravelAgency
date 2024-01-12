import {PurchaseHistoryService} from './purchase-history.service';
import {TripsDbService} from './trips-db.service';
import {Injectable} from '@angular/core';
import {Trip} from '../Components/trip/trip_interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Trip[] = [];
  totalCost: number = 0;

  constructor(public tripsDbService: TripsDbService, public purchaseHistoryService: PurchaseHistoryService) {
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
    this.items = [];
    this.calculateTotalCost();
  }


  calculateTotalCost() {
    this.totalCost = 0;
    this.items.forEach(trip => {
      this.totalCost += trip.price * this.tripsDbService.getTripsMap(trip.id).reservedCount;
    });
  }
}
