import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {
  otpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.otpForm = this.fb.group({
      digit1: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit2: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit3: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit4: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit5: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit6: ['', [Validators.required, Validators.pattern('[0-9]')]],
    });
  }

  autoFocusNext(index: number) {
    const inputs = document.querySelectorAll('.otp-boxes input') as NodeListOf<HTMLInputElement>;
    const currentInput = inputs[index];

    if (currentInput.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  }

  onVerify() {
    this.router.navigate(['/login']);
  }

}
