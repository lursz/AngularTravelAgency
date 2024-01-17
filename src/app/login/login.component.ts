import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    credentials = {
      email: '',
      password: ''
    }

    registerInfo = '';

    constructor(
      private router: Router, private authService: AuthenticationService) {}

    login() {
      this.authService.login(this.credentials)
        .then(() => this.router.navigate(['/dashboard']))
        .catch(err => console.log(err.message));
    }

    register() {
      this.authService.register(this.credentials)
        .then(() => this.registerInfo = 'ACCOUNT CREATED, PLZ LOGIN IN!')
        .catch(err => console.log(err.message));
    }
  }

