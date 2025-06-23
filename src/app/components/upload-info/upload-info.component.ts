import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebcamImage } from 'ngx-webcam';
import { CapturedimgService } from '../../service/capturedimg.service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-upload-info',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './upload-info.component.html',
  styleUrl: './upload-info.component.scss'
})

export class UploadInfoComponent implements OnInit {
  capturedImage?: WebcamImage;
  multipage = false;
  showOverlay = false;

  uploadForm = new FormGroup({
  filename: new FormControl('', Validators.required),
  multipage: new FormControl(false),
  filetype: new FormControl('invoice'),
});


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CapturedimgService: CapturedimgService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.capturedImage = this.CapturedimgService.getImage();
   
    this.cdr.detectChanges();
  }

  hasError(controlName: string): boolean {
    const control = this.uploadForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
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

  onCancel() {
    this.router.navigate(['/dashboard']);
  }
}
