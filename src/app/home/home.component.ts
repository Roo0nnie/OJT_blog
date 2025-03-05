import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { Weekly1Component } from '../weekly1/weekly1.component';
import { RouterModule, Router } from '@angular/router';
import { SwiperComponent } from '../page/swiper/swiper.component';
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FooterComponent,
    Weekly1Component,
    RouterModule,
    SwiperComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  homeBG: string = 'assets/svg/2.svg';
  homeBG1: string = 'assets/svg/1.svg';
  homeBG2: string = 'assets/svg/3.svg';
  homeBG3: string = 'assets/svg/4.svg';
  color: string = '#431eb1';

  gotoWeek1() {
    this.router.navigate(['/week-1']);
  }
}
