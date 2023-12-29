import { TripsPanelComponent } from './../trips-panel/trips-panel.component';
import { Component, Input } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { Trip } from '../trip/trip_interface';

@Component({
  selector: 'app-trip-creator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trip-creator.component.html',
  styleUrl: './trip-creator.component.css'
})
export class TripCreatorComponent {
  @Input() tripsPanelComponent!: TripsPanelComponent;

  trip: Trip;
  price: number = 0;
  startDateString: string = '';
  endDateString: string = '';

  constructor() {
    this.trip = {
      id: 0,
      name: '',
      country: '',
      start_date: '',
      end_date: '',
      price: 0,
      currency: '',
      max_participants: 0,
      description: '',
      picture: ''
    };
  }

  validateForm(): boolean {
    const startDate = new Date(this.startDateString);
    const endDate = new Date(this.endDateString);

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

    if (this.trip.picture === '') {
      alert('Image cannot be empty');
      return false;
    }

    if (!this.trip.start_date || !this.trip.end_date ||
        this.trip.start_date.toString() === 'Invalid Date' ||
        this.trip.end_date.toString() === 'Invalid Date') {
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

    this.trip.start_date = startDate.toLocaleDateString().split('T')[0];
    this.trip.end_date = endDate.toLocaleDateString().split('T')[0];

    try {
      new URL(this.trip.picture);
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
    this.tripsPanelComponent.addTrip(this.trip);
  }
}
