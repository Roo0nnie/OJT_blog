import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { Weekly1Component } from './weekly1/weekly1.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'week-1', component: Weekly1Component },
];
