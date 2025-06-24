import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface UploadItem {
  id: number;
  title: string;
  date: string;
  user: string;
  imageUrl: string;
}
@Component({
  selector: 'app-my-invoice',
  imports: [CommonModule, FormsModule], 
  templateUrl: './my-invoice.component.html',
  styleUrls: ['./my-invoice.component.scss']
})


export class MyInvoiceComponent
{searchText = '';
  activeTab: 'recent' | 'history' = 'recent';

  uploads: UploadItem[] = [
    { id: 1, title: 'Mihika pvt ltd', date: '14 JUN, 2025', user: 'ADMIN', imageUrl: '/assets/bill.png' },
    { id: 7, title: 'Smth pvt ltd', date: '14 JUN, 2025', user: 'ADMIN', imageUrl: '/assets/bill.png' },
    { id: 3, title: 'Idk pvt ltd', date: '14 JUN, 2025', user: 'ADMIN', imageUrl: '/assets/bill.png' },
    { id: 4, title: 'H&M pvt ltd', date: '14 JUN, 2025', user: 'ADMIN', imageUrl: '/assets/bill.png' },
    { id: 2, title: 'IMS software pvt ltd', date: '20 JUN, 2025', user: 'ADMIN', imageUrl: '/assets/bill.png' }
  ];

  get filteredUploads() {
    return this.uploads.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  setTab(tab: 'recent' | 'history') {
    this.activeTab = tab;
  }

  deleteUpload(id: number) {
    this.uploads = this.uploads.filter(item => item.id !== id);
  }

}
