import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import {environment} from '../environments/environment';


import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "travelagency-fa39e", "appId": "1:730982599607:web:7b44845eeeaf1d6e2ab632", "databaseURL": "https://travelagency-fa39e-default-rtdb.europe-west1.firebasedatabase.app", "storageBucket": "travelagency-fa39e.appspot.com", "apiKey": "AIzaSyD5QhAucNRudnqHhbn-f9Yy3c7ObLGPlic", "authDomain": "travelagency-fa39e.firebaseapp.com", "messagingSenderId": "730982599607", "measurementId": "G-KS4Q4C02F3" }))), importProvidersFrom(provideFirestore(() => getFirestore()))]
};
