import { Component } from '@angular/core';
import { TripsDbService } from '../../Services/trips-db.service';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { Trip } from '../trip/trip_interface';
import { CommonModule } from '@angular/common';
import { MoneyService } from '../../Services/money.service';
import { TripCountingService, TripCountingState } from '../../Services/trip-counting.service';
import { TrustPipe } from "../../trust.pipe";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-trip-view',
    standalone: true,
    templateUrl: './trip-view.component.html',
    styleUrl: './trip-view.component.css',
    imports: [CommonModule, TrustPipe]
})
export class TripViewComponent {
  constructor(private route: ActivatedRoute, public tripsDbService: TripsDbService, public moneyService: MoneyService, public tripCountingService: TripCountingService, private sanitizer: DomSanitizer) { }

  trip: Trip = this.tripsDbService.trips[this.route.snapshot.params['id']];
  tripProperties: TripCountingState = this.tripsDbService.safeGetMapValue(this.tripsDbService.tripsMap, this.route.snapshot.params['id']);
  rating: number = 0;

  rateTrip(value: number) {
    this.rating = value;
    this.tripsDbService.rateTrip(this.trip.id, this.rating);
  }


  get mapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.trip.map);
  }

}
