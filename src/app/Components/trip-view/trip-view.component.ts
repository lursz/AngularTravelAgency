import { Component } from '@angular/core';
import { TripsDbService } from '../../Services/trips-db.service';

@Component({
  selector: 'app-trip-view',
  standalone: true,
  imports: [],
  templateUrl: './trip-view.component.html',
  styleUrl: './trip-view.component.css'
})
export class TripViewComponent {
constructor(public tripsDbService: TripsDbService) { }
}
