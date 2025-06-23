import { Component, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { WebcamImage, WebcamModule, WebcamComponent } from 'ngx-webcam';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CapturedimgService } from '../../service/capturedimg.service';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [WebcamModule, CommonModule,RouterModule],
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent {
  private trigger = new Subject<void>();
  triggerObservable$ = this.trigger.asObservable();

  constructor(private router: Router, private CapturedimgService: CapturedimgService) {}

  triggerSnapshot() {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage) {
    this.CapturedimgService.setImage(webcamImage);
    this.router.navigate(['/image-view']);
  }


}
