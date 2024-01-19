import {inject, Injectable} from '@angular/core';
import {FirebaseError} from '@angular/fire/app';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  user,
  User,
  UserCredential
} from '@angular/fire/auth';
import {Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  user$ = user(this.auth);
  userSubscription: Subscription;

  constructor() {

    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(aUser);
    })
  }

  get isLoggedIn(): boolean {
    return this.auth.currentUser !== null;
  }

  logOut(): void {
    signOut(this.auth).then(() => {
      // Sign-out successful.
      alert("Logged out");
    }).catch((error: FirebaseError) => {
      // An error happened.
      console.log(error);
    });
  }


  logIn(email: string, password: string): void {
    signInWithEmailAndPassword(this.auth, email, password).then((userCredential: UserCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Login successful");
    }
    ).catch((error: FirebaseError) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  signUp(email: string, password: string): void {
    createUserWithEmailAndPassword(this.auth, email, password).then((userCredential: UserCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Registration successful");
    }
    ).catch((error: FirebaseError) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
