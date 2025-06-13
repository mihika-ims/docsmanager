import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
 

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      serverName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

    onSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/verify']);

    
  }

  hasError(controlName: string): boolean {
    const control = this.registerForm.get(controlName);
    return control?.touched && control.invalid || false;
  }
 
}