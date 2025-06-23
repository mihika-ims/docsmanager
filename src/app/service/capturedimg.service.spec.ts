import { TestBed } from '@angular/core/testing';

import { CapturedimgService } from './capturedimg.service';

describe('CapturedimgService', () => {
  let service: CapturedimgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapturedimgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
