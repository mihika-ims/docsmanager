import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  imports: [],
  templateUrl: './verify.component.html',
  styleUrl: './verify.component.scss'
})
export class VerifyComponent {
  otp: string[] = Array(6).fill('');

  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    this.otp[index] = input.value;

    if (input.value && index < 5) {
      const nextInput = document.getElementById('otp-' + (index + 1));
      nextInput?.focus();
    }
  }
constructor(private router: Router) {}
  onVerify(){
     this.router.navigate(['/login']);
  }
}
