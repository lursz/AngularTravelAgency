import {Component} from '@angular/core';
import {TripsDbService} from '../../Services/trips-db.service';
import {ActivatedRoute} from '@angular/router';
import {Trip} from '../trip/trip_interface';
import {CommonModule, NgFor, NgForOf} from '@angular/common';
import {MoneyService} from '../../Services/money.service';
import {Comment, RatingState, TripCountingService, TripCountingState} from '../../Services/trip-counting.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-trip-view',
  standalone: true,
  templateUrl: './trip-view.component.html',
  styleUrl: './trip-view.component.css',
  imports: [CommonModule, FormsModule, NgFor, NgForOf]
})
export class TripViewComponent {
  trip: Trip = this.tripsDbService.trips[this.route.snapshot.params['id']];
  tripProperties: TripCountingState = this.tripsDbService.getTripsMap(this.route.snapshot.params['id']);
  tripRatings: RatingState = this.tripsDbService.getRatingsMap(this.route.snapshot.params['id']);
  rating: number = 0;
  newComment: Comment = new Comment('', '', '');

  constructor(private route: ActivatedRoute, public tripsDbService: TripsDbService, public moneyService: MoneyService, public tripCountingService: TripCountingService, private sanitizer: DomSanitizer) {
  }

  get Comments(): Comment[] {
    let tripProp = this.tripsDbService.getRatingsMap(this.trip.id);
    return tripProp.comments;
  }

  get Rating(): number {
    let tripProp = this.tripsDbService.getRatingsMap(this.trip.id);
    if (tripProp.ratingCount == 0)
      return 0;
    return tripProp.ratingSum / tripProp.ratingCount;
  }

  get mapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.trip.map);
  }


  addComment() {
    this.tripsDbService.addComment(this.trip.id, this.newComment);
    this.newComment = new Comment('', '', '');
    alert('Comment added!');
  }

  rateTrip(value: number) {
    this.rating = value;
    this.tripsDbService.rateTrip(this.trip.id, this.rating);
  }
}
