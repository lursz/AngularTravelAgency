import { Component } from '@angular/core';
import { TripCountingService } from '../../Services/trip-counting.service';

@Component({
  selector: 'app-trips-counter',
  standalone: true,
  imports: [],
  providers: [TripCountingService],
  templateUrl: './trips-counter.component.html',
  styleUrl: './trips-counter.component.css'
})
export class TripsCounterComponent {
  constructor(public tripCountingService: TripCountingService) {
  }

}
