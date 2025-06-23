import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CapturedimgService } from '../../service/capturedimg.service';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-view',
  imports: [CommonModule],
  templateUrl: './image-view.component.html',
  styleUrl: './image-view.component.scss'
})
export class ImageViewComponent {
  private trigger = new Subject<void>();
  triggerObservable$ = this.trigger.asObservable();
  capturedImage?: WebcamImage;
  constructor(private router: Router, private CapturedimgService: CapturedimgService) { }

  ngOnInit(): void {
    this.capturedImage = this.CapturedimgService.getImage();

  }
   onBackClick() {
    this.router.navigate(['/camera']); 
  }

  onContinueClick() {
    this.router.navigate(['/upload-info']); 
  }
}
