import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Interview {
  name: string;
  role?: string;
  bio?: string;
  summary?: string;
  image?: string;
  rawUrl?: string;
  safeUrl?: SafeResourceUrl;
}
