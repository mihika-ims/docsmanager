import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-info',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './upload-info.component.html',
  styleUrl: './upload-info.component.scss'
})
export class UploadInfoComponent {

uploadForm: FormGroup;
multipage: boolean = false;
showOverlay = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.uploadForm = this.fb.group({
      filename: ['', Validators.required],
    });
  }

  hasError(controlName: string): boolean {
    const control = this.uploadForm.get(controlName);
    return control?.touched && control.invalid || false;
  }
 onCancel() {
    this.uploadForm.reset();
  }

  onUpload() {
    if (this.uploadForm.invalid) {
      this.uploadForm.markAllAsTouched();
      return;
    }
    this.showOverlay = true;
  }
   closeOverlay() {
    this.showOverlay = false;
    this.router.navigate(['/my-invoice']);
  }


}
