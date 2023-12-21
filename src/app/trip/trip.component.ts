import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trip } from './trip_interface';
import { TripCountingState } from '../trips-panel/trip-counting.service';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  @Input() trip!: Trip;
  @Input() tripProperties!:TripCountingState; 
  @Output() removeTripEvent = new EventEmitter<number>();

  addReservedCount() {
    if (this.trip.max_participants >= this.tripProperties.reservedCount) {
      this.tripProperties.reservedCount++;
    }
    
  }
  subtractReservedCount() {
    if (this.tripProperties.reservedCount > 0)
      this.tripProperties.reservedCount--;
  }


  removeTrip() {
    this.removeTripEvent.emit();
  }
}
