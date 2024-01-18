import { CanActivateFn } from '@angular/router';
import { AuthService } from './Services/auth.service';

export const authGuard = (authService: AuthService): CanActivateFn => {
  return () => {
    return authService.isLoggedIn;
  }

}