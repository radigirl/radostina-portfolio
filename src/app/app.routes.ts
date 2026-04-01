import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Certificates } from './features/certificates/certificates';
import { Contact } from './features/contact/contact';
import { NotFound } from './features/not-found/not-found/not-found';
import { ProjectDetail } from './features/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/:slug', component: ProjectDetail },
  { path: 'certificates', component: Certificates },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound }
];