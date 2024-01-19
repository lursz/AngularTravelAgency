import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService} from '../../Services/auth.service';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,

  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authForm: FormGroup;
  isRegistration: boolean = false;

  constructor(public authService: AuthService, private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['']
    });
  }


  onLogin(): void {
    if (this.authForm.valid) {
      const { email, password } = this.authForm.value;
      this.authService.logIn(email, password);
    }
  }

  onRegister(): void {
    if (this.authForm.valid && this.passwordsMatch()) {
      const { email, password } = this.authForm.value;
      this.authService.signUp(email, password);
    } else {
      alert("Registration failed. Please check your inputs and ensure passwords match.");
    }
  }

  onLogout(): void {
    this.authService.logOut();
  }


  protected passwordsMatch(): boolean {
    const password = this.authForm.get('password')?.value;
    const confirmPassword = this.authForm.get('confirmPassword')?.value;
    return password === confirmPassword;
  }


}
