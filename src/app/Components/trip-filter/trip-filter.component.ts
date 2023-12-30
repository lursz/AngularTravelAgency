import { NgForOf } from '@angular/common';
import { TripFilterService } from './../../Services/trip-filter.service';
import { TripsDbService } from './../../Services/trips-db.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trip-filter',
  standalone: true,
  imports: [NgForOf],
  providers: [],
  templateUrl: './trip-filter.component.html',
  styleUrl: './trip-filter.component.css'
})
export class TripFilterComponent {
  constructor(public tripsDbService: TripsDbService, public tripFilterService: TripFilterService) { }

}
