import { PurchaseHistoryService } from './purchase-history.service';
import { TripsDbService } from './trips-db.service';
import { Injectable } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Trip[] = [];

  addToCart(trip: Trip) {
    this.items.push(trip);
  }

  removeFromCart(trip: Trip) {
    this.items.splice(this.items.indexOf(trip), 1);
  }

  buy() {
    this.items.forEach(trip => {
      this.purchaseHistoryService.addToHistory(trip);
    }
    );
    this.items = [];
  }

  constructor(public tripsDbService: TripsDbService, public purchaseHistoryService: PurchaseHistoryService) { }
}
