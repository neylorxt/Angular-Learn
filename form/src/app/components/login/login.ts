import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  loginSubmit() {
    // Implement login logic here
  }
}
