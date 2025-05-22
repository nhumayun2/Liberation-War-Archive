import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { InterviewsComponent } from './pages/interviews/interviews.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'interviews', component: InterviewsComponent },
];
