import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


export interface Credentials {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  readonly authState$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {}

  get user() {
    return this.fireAuth.currentUser;
  }

  login({email, password}: Credentials) {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register({email, password}: Credentials) {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fireAuth.signOut();
  }
}
