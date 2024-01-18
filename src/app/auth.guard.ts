import { CanActivateFn } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { state } from '@angular/animations';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state): boolean => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn) {
    return true;
  } else {
    console.log("You need to be logged in to access this page");
    return false;
  }

}