import {
  ApplicationConfig,
  importProvidersFrom,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

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
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ),

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