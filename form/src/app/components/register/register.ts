import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  registerSubmit() {
    // Implement register logic here
  }
}
