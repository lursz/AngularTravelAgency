import { MoneyService } from './../../Services/money.service';
import { CartService } from './../../Services/cart.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripImporterService } from '../../Services/trip-importer.service';
import { TripComponent } from "../trip/trip.component";
import { Trip } from '../trip/trip_interface';
import { TripCountingState } from '../../Services/trip-counting.service';
import { find, max } from 'rxjs';
import { TripsDbService } from '../../Services/trips-db.service';
import { TripsCounterComponent } from "../trips-counter/trips-counter.component";
import { TripFilterComponent } from "../trip-filter/trip-filter.component";
import {NgxPaginationModule} from 'ngx-pagination'; 

@Component({
    selector: 'app-trips-panel',
    standalone: true,
    templateUrl: './trips-panel.component.html',
    styleUrl: './trips-panel.component.css',
    imports: [TripComponent, CommonModule, TripsCounterComponent, TripFilterComponent, NgxPaginationModule]
})
export class TripsPanelComponent {
    p: number = 1;

    constructor(public TripsDB: TripsDbService, public cartService: CartService, public moneyService: MoneyService) {
    }

    getTrips(): Trip[] {
        return this.TripsDB.trips
            .filter(trip => this.TripsDB.safeGetMapValue(this.TripsDB.tripsMap, trip.id).display);
    }

}
