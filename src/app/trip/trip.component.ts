import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from './trip_interface';
import { TripCountingState } from '../trips-panel/trip-counting.service';
import { TotalTripsCountService } from '../trips-panel/total-trips-count.service';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [CommonModule],
  providers: [TotalTripsCountService],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  @Input() trip!: Trip;
  @Input() tripProperties!:TripCountingState; 
  @Input() totalReservedTripsCounter!: number;
  @Output() removeTripEvent = new EventEmitter<number>();

  TotalTripsCounter: TotalTripsCountService = new TotalTripsCountService;

  addReservedCount() {
    if (this.trip.max_participants >= this.tripProperties.reservedCount) {
      this.tripProperties.reservedCount++;
      this.totalReservedTripsCounter++;
    }
    
  }
  subtractReservedCount() {
    if (this.tripProperties.reservedCount > 0)
      {this.tripProperties.reservedCount--;
      this.totalReservedTripsCounter--;
      }
  }


  removeTrip() {
    this.removeTripEvent.emit();
  }
}
