import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// interface MyFormControls {
//   username: string;
// }
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet,CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
  this.myForm = this.fb.group({
    username: ['', Validators.required]
  });
}

onSubmit() {
  if (this.myForm.valid) {
    // handle valid form submission
  }
}
}
