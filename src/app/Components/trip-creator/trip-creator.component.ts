import { TripsDbService } from '../../Services/trips-db.service';
import { TripsPanelComponent } from '../trips-panel/trips-panel.component';
import { Component, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { Trip } from '../trip/trip_interface';
import { MoneyService } from "../../Services/money.service";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-trip-creator',
  standalone: true,
  imports: [FormsModule, NgForOf],
  providers: [TripsDbService, MoneyService],
  templateUrl: './trip-creator.component.html',
  styleUrl: './trip-creator.component.css'
})
export class TripCreatorComponent {
  trip: Trip;
  price: number = 0;
  startDateString: string = '';
  endDateString: string = '';

  constructor(public TripsDB: TripsDbService, public MoneyService: MoneyService) {
    this.trip = {
      id: 0,
      name: '',
      country: '',
      start_date: '',
      end_date: '',
      price: 1,
      currency: '',
      max_participants: 0,
      description: '',
      picture: [],
      map: ''
    };
  }

  validateForm(): boolean {
    const startDate = new Date(this.trip.start_date);
    const endDate = new Date(this.trip.end_date);

    let tempDate = this.trip.start_date.split("/").reverse();
    this.trip.start_date = tempDate.join("-");

    tempDate = this.trip.end_date.split("/").reverse();
    this.trip.end_date = tempDate.join("-");
    console.log(this.trip.start_date);
    console.log(this.trip.end_date);



    if (this.trip.name === '') {
      alert('Name cannot be empty');
      return false;
    }

    if (this.trip.country === '') {
      alert('Country cannot be empty');
      return false;
    }

    if (this.trip.currency === '') {
      alert('Currency cannot be empty');
      return false;
    }

    if (this.trip.description === '') {
      alert('Description cannot be empty');
      return false;
    }

    if (this.trip.picture[0] === '') {
      alert('Image cannot be empty');
      return false;
    }

    if (!this.trip.start_date || !this.trip.end_date) {
      alert('Start date and end date must be set');
      return false;
    }

    if (this.trip.price <= 0) {
      alert('Price must be positive');
      return false;
    }

    if (this.trip.max_participants <= 0) {
      alert('Max participants must be positive');
      return false;
    }

    if (startDate > endDate) {
      alert('Start date must be before end date or they must be equal');
      return false;
    }


    try {
      new URL(this.trip.picture[0]);
    } catch (_) {
      alert('Image must be a valid URL');
      return false;
    }

    return true;
  }

  createTrip() {
    if (!this.validateForm()) {
      return;
    }
    alert('Trip created successfully');
    this.TripsDB.addTrip(this.trip);
  }
}
