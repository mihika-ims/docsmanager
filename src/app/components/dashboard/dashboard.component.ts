import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BottomNavComponent } from '../bottom-nav/bottom-nav.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [BottomNavComponent, RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent implements OnInit {
  showPopup = true;
  companyName = 'IMS';
  loginDate = new Date().toLocaleDateString();

  ngOnInit() {
    const popupShown = sessionStorage.getItem('popupShown');
    if (popupShown) {
      this.showPopup = false;
    }
  }
  closePopup() {
    this.showPopup = false;
    sessionStorage.setItem('popupShown', 'true');
  }
}
