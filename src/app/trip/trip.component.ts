import { Component, Input, Output } from '@angular/core';
import { Trip } from './trip_interface';
import { TripCountingState } from '../trips-panel/trip-counting.service';

@Component({
  selector: 'app-trip',
  standalone: true,
  imports: [],
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent {
  @Input() trip!: Trip;
  @Input() tripProperties!:TripCountingState | undefined; 

  addReservedCount() {
    if (this.tripProperties) {
      this.tripProperties.reservedCount++;
    }
  }
  subtractReservedCount() {
    if (this.tripProperties) {
      this.tripProperties.reservedCount--;
    }
  }
  hideOrShowTrip(display: boolean) {
    if (this.tripProperties) {
      this.tripProperties.display = display;
    }
  }
}
