import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Injectable({ providedIn: 'root' })
export class CapturedimgService {
  private image?: WebcamImage;

  setImage(image: WebcamImage) {
    this.image = image;
  }

  getImage(): WebcamImage | undefined {
    return this.image;
  }

  clearImage() {
    this.image = undefined;
  }
}
