import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {collection, deleteDoc, doc, Firestore, getDocs, setDoc,} from "@angular/fire/firestore";
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripImporterService {
  trips: Trip[] = []
  firestore: Firestore = inject(Firestore);
  eventEmitter: EventEmitter<void> = new EventEmitter();


  constructor() {
    from(getDocs(collection(this.firestore, 'trips'))).subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.trips.push(doc.data() as Trip);
        this.eventEmitter.emit();
      });
    }
    );
  }


  // constructor(http: HttpClient) {
  //   http.get<Trip[]>('/assets/trips_list.json').subscribe(result => {
  //     this.trips = result;
  //     this.eventEmitter.emit();
  //   });
  // }


  getTrips() {
    return this.trips;
  }
}
