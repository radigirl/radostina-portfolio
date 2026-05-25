import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  Download,
  Github,
  Linkedin,
  LucideAngularModule,
  Mail,
} from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    importProvidersFrom(
      LucideAngularModule.pick({
        Mail,
        Linkedin,
        Github,
        Download,
      })
    ),
  ],
};