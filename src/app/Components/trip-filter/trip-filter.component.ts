import {NgForOf, NgIf} from '@angular/common';
import {Filter, TripFilterService} from '../../Services/trip-filter.service';
import {TripsDbService} from '../../Services/trips-db.service';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-trip-filter',
  standalone: true,
  imports: [NgIf, NgForOf, FormsModule],
  providers: [],
  templateUrl: './trip-filter.component.html',
  styleUrl: './trip-filter.component.css'
})
export class TripFilterComponent {
  filter: Filter = new Filter('', [], '', '', 0, 0, []);
  selectedCountries: { [key: string]: boolean } = {};
  selectedRatings: boolean[] = [false, false, false, false, false];

  constructor(public tripsDbService: TripsDbService, public tripFilterService: TripFilterService) {
  }


  applyFilter() {
    let selected = Object.keys(this.selectedCountries).filter(key => this.selectedCountries[key]);
    this.filter.country = selected;
    this.filter.rating = this.selectedRatings;
    this.tripFilterService.filter(this.filter);

    this.selectedRatings = [false, false, false, false, false];
  }

  resetFilter() {
    this.tripFilterService.resetFilter();
  }

}
