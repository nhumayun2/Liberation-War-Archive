import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  lightboxOpen = false;
  selectedImage = '';

  // Replace these URLs with your actual image URLs
  images = [
    '/war1.jpg',
    '/war2.jpg',
    '/war3.jpg',
    '/war4.jpg',
    '/war5.jpg',
    '/war6.jpg',
    '/war7.jpg',
    '/war8.jpg',
    '/war9.jpg',
    '/war10.jpg',
    '/war11.jpg',
    '/war12.jpg',
    '/war13.jpg',
    '/war14.jpg',
    '/war15.jpg',
    '/war16.jpg',
    '/war17.jpg',
    '/war18.jpg',
    '/war19.jpg',
    '/war20.jpg',
    '/war21.jpg',
    '/war22.jpg',
  ];

  openLightbox(img: string) {
    this.selectedImage = img;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.selectedImage = '';
  }
}
