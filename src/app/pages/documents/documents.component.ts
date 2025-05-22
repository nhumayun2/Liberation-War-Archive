import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DocumentItem {
  title: string;
  description: string;
  fileUrl: string;
  type: 'Treaty' | 'Declaration' | 'Correspondence';
  date: string; // YYYY-MM-DD
  source: string;
}

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
})
export class DocumentsComponent {
  documents: DocumentItem[] = [
    {
      title: 'Proclamation of Independence',
      description: 'Declaration of Bangladesh’s independence in March 1971.',
      fileUrl: 'assets/documents/proclamation.pdf',
      type: 'Declaration',
      date: '1971-03-26',
      source: 'Government Archive',
    },
    {
      title: 'Peace Treaty 1971',
      description: 'Treaty involving post-war negotiations and agreements.',
      fileUrl: 'assets/documents/peace-treaty.pdf',
      type: 'Treaty',
      date: '1971-12-17',
      source: 'Foreign Ministry',
    },
    {
      title: 'Letter from Mujib',
      description:
        'Official correspondence between Sheikh Mujibur Rahman and international leaders.',
      fileUrl: 'assets/documents/mujib-letter.jpg',
      type: 'Correspondence',
      date: '1971-04-12',
      source: 'Bangabandhu Archive',
    },
  ];

  filterType: string = 'All';

  filteredDocuments() {
    if (this.filterType === 'All') return this.documents;
    return this.documents.filter((doc) => doc.type === this.filterType);
  }
}
