import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachDocsComponent } from './attach-docs.component';

describe('AttachDocsComponent', () => {
  let component: AttachDocsComponent;
  let fixture: ComponentFixture<AttachDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttachDocsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttachDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
