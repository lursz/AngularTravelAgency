import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { Trip } from './trip_interface';
import { TripCountingService, TripCountingState } from '../../Services/trip-counting.service';
import { TripsDbService } from '../../Services/trips-db.service';
import { CartService } from '../../Services/cart.service';
import { MoneyService } from '../../Services/money.service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [CommonModule, NgIf, RouterLink],
  providers: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  @Input() trip!: Trip;
  @Input() tripProperties!: TripCountingState;
  @Output() removeTripEvent = new EventEmitter<number>();
  rating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(public tripCountingService: TripCountingService, public tripDB: TripsDbService, public cartService: CartService, public moneyService: MoneyService) {
  }

  addReservedCount() {
    if (this.trip.max_participants >= this.tripProperties.reservedCount) {
      this.tripProperties.reservedCount++;
      this.tripCountingService.incrementTotalReservedTripsCounter();
    }
    if (this.tripProperties.reservedCount === 1) {
      this.cartService.addToCart(this.trip);
    }

  }
  subtractReservedCount() {
    if (this.tripProperties.reservedCount > 0) {
      this.tripProperties.reservedCount--;
      this.tripCountingService.decrementTotalReservedTripsCounter();
    }
    if (this.tripProperties.reservedCount === 0) {
      this.cartService.removeFromCart(this.trip);
    }
  }

 rateTrip(value: number) {
    this.rating = value;
    this.tripDB.rateTrip(this.trip.id, this.rating);
  }

  removeTrip() {
    this.removeTripEvent.emit();
  }
}
