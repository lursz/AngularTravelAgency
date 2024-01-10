import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, inject } from '@angular/core';
import { Trip } from '../Components/trip/trip_interface';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {collection, deleteDoc, doc, Firestore, getDocs, setDoc, updateDoc, arrayUnion} from "@angular/fire/firestore";
import { from } from 'rxjs';
import { RatingState } from './trip-counting.service';
import { Comment } from './trip-counting.service';


@Injectable({
  providedIn: 'root'
})
export class TripImporterService {
  trips: Trip[] = []
  ratings: Map<number, RatingState> = new Map<number, RatingState>();
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
    from(getDocs(collection(this.firestore, 'rating'))).subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.ratings.set(Number(doc.id), doc.data() as RatingState);
      });
    }
    );
  }

  addTrip(trip: Trip) {
    setDoc(doc(this.firestore, 'trips', trip.id.toString()), trip);
  }

  removeTrip(trip: Trip) {
    deleteDoc(doc(this.firestore, 'trips', trip.id.toString()));
  }


 addComment(tripId: number, comment: Comment) {
  const ratingRef = doc(this.firestore, 'rating', tripId.toString());
  const dataToSend = {"author": comment.author, "content": comment.content, "date": comment.date};
  updateDoc(ratingRef, {
    comments: arrayUnion(dataToSend)
  });

  }


  // constructor(http: HttpClient) {
  //   http.get<Trip[]>('/assets/trips_list.json').subscribe(result => {
  //     this.trips = result;
  //     this.eventEmitter.emit();
  //   });
  // }

}
