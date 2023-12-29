import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TripImporterService } from '../Services/trip-importer.service';
import { TripComponent } from "../trip/trip.component";
import { Trip } from '../trip/trip_interface';
import { TripCountingState } from '../Services/trip-counting.service';
import { find, max } from 'rxjs';

@Component({
    selector: 'app-trips-panel',
    standalone: true,
    templateUrl: './trips-panel.component.html',
    styleUrl: './trips-panel.component.css',
    providers: [TripImporterService],
    imports: [TripComponent, CommonModule]
})
export class TripsPanelComponent {
    service: TripImporterService;
    trips: Trip[] = [];
    tripsMap: Map<number, TripCountingState> = new Map<number, TripCountingState>();

    safeGetMapValue(Map: Map<number, TripCountingState>, key: number): TripCountingState {
        let value = Map.get(key);
        if (value)
            return value;
        return new TripCountingState(0, undefined, undefined);
    }

    init(service: TripImporterService) {
        this.trips = this.service.getTrips();
        for (let i = 0; i < this.trips.length; i++) {
            this.tripsMap.set(i, new TripCountingState(0, undefined, undefined));
        }
        this.getMostExpensiveTrip();
        this.getCheapestTrip();
    }
    constructor(service: TripImporterService) {
        this.service = service;
        this.service.eventEmitter.subscribe(() => {
            this.init(service);
        });
        this.init(service);
    }


    addTrip(trip: Trip) {
        this.trips.push(trip);
        this.tripsMap.set(this.trips.length - 1, new TripCountingState(0, undefined, undefined));
        this.getMostExpensiveTrip();
        this.getCheapestTrip();
    }

    removeTrip(tripId: number) {
        this.trips.splice(tripId, 1);
        this.tripsMap.delete(tripId);
    }

    getMostExpensiveTrip(): number {
        let maxPrice = 0;
        let maxPriceIndex = 0;
        for (let i = 0; i < this.trips.length; i++) {
            if (this.trips[i].price > maxPrice) {
                maxPrice = this.trips[i].price;
                maxPriceIndex = i;
            }
        }
        this.safeGetMapValue(this.tripsMap, maxPriceIndex).highestPrice = true;
        return maxPriceIndex;
    }

    getCheapestTrip(): number {
        let minPrice = 0;
        let minPriceIndex = 0;
        for (let i = 0; i < this.trips.length; i++) {
            if (this.trips[i].price < minPrice) {
                minPrice = this.trips[i].price;
                minPriceIndex = i;
            }
        }
        this.safeGetMapValue(this.tripsMap, minPriceIndex).lowestPrice = true;
        return minPriceIndex;

    }
}
