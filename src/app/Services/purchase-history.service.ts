import { Injectable } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {
  items: Trip[] = [];

  addToHistory(trip: Trip) {
    this.items.push(trip);
    console.log(this.items);
  }


  constructor() { }
}
