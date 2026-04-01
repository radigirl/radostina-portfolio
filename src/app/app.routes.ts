import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Certificates } from './features/certificates/certificates';
import { Contact } from './features/contact/contact';
import { NotFound } from './features/not-found/not-found/not-found';
import { PlantreeDetail } from './features/projects/plantree-detail/plantree-detail';
import { PengphinDetail } from './features/projects/pengphin-detail/pengphin-detail';
import { GarminDetail } from './features/projects/garmin-detail/garmin-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects/plantree', component: PlantreeDetail },
  { path: 'projects/pengphin', component: PengphinDetail },
  { path: 'projects/garmin', component: GarminDetail },
  { path: 'certificates', component: Certificates },
  { path: 'contact', component: Contact },
  { path: '**', component: NotFound }
];