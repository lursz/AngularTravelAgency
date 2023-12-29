import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from './trip_interface';
import { TripCountingService, TripCountingState } from '../Services/trip-counting.service';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  @Input() trip!: Trip;
  @Input() tripProperties!: TripCountingState;
  TripCountingService = TripCountingService
  @Output() removeTripEvent = new EventEmitter<number>();



  addReservedCount() {
    if (this.trip.max_participants >= this.tripProperties.reservedCount) {
      this.tripProperties.reservedCount++;
      TripCountingService.incrementTotalReservedTripsCounter();
    }

  }
  subtractReservedCount() {
    if (this.tripProperties.reservedCount > 0) {
      this.tripProperties.reservedCount--;
      TripCountingService.decrementTotalReservedTripsCounter();
    }
  }


  removeTrip() {
    this.removeTripEvent.emit();
  }
}
