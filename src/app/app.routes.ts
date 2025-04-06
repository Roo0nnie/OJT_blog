import { Week2Component } from './week-2/week-2.component';
import { Week9Component } from './week-9/week-9.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { Weekly1Component } from './weekly1/weekly1.component';
import { Week3Component } from './week-3/week-3.component';
import { Week4Component } from './week-4/week-4.component';
import { Week7Component } from './week-7/week-7.component';
import { Week8Component } from './week-8/week-8.component';
import { Week5Component } from './week-5/week-5.component';
import { Week6Component } from './week-6/week-6.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'week-1', component: Weekly1Component },
  { path: 'week-2', component: Week2Component },
  { path: 'week-3', component: Week3Component },
  { path: 'week-4', component: Week4Component },
  { path: 'week-5', component: Week5Component },
  { path: 'week-6', component: Week6Component },
  { path: 'week-7', component: Week7Component },
  { path: 'week-8', component: Week8Component },
  { path: 'week-9', component: Week9Component },
  { path: '**', redirectTo: 'home' },
];
