import { NgForOf } from '@angular/common';
import { Filter, TripFilterService } from '../../Services/trip-filter.service';
import { TripsDbService } from '../../Services/trips-db.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Trip } from '../trip/trip_interface';

@Component({
  selector: 'app-trip-filter',
  standalone: true,
  imports: [NgForOf, FormsModule],
  providers: [],
  templateUrl: './trip-filter.component.html',
  styleUrl: './trip-filter.component.css'
})
export class TripFilterComponent {
  constructor(public tripsDbService: TripsDbService, public tripFilterService: TripFilterService) { }

  filter: Filter = new Filter('', '', '', '', 0, 0, 0);

  applyFilter() {
    this.tripFilterService.filter(this.filter);
    console.log(this.filter);
  }





}
