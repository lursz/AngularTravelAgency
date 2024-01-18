import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FirebaseError } from '@angular/fire/app';

import { Persistence, browserLocalPersistence, browserSessionPersistence, inMemoryPersistence, setPersistence } from 'firebase/auth';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  private auth: Auth = inject(Auth);
  set_persistance(persistance: string): void {
    let per: Persistence;
    switch (persistance) {
        case "local":
            per = browserLocalPersistence;
            break;
        case "session":
            per = browserSessionPersistence;
            break;
        case "none":
            per = inMemoryPersistence;
            break;
            default:
                throw new Error("Unknown persistance type");
            }
    setPersistence(this.auth, per).then(() => {
        console.log("persistance set");
    }).catch((error: FirebaseError) => {
        console.log(error.message);
    });
}
}
