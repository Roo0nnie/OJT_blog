import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SwiperComponent } from '../page/swiper/swiper.component';
import { PhotoComponent } from '../photo/photo/photo.component';
@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    SwiperComponent,
    PhotoComponent,
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  homeBG: string = 'assets/svg/2.svg';
  homeBG1: string = 'assets/svg/1.svg';
  homeBG2: string = 'assets/svg/3.svg';
  homeBG3: string = 'assets/svg/4.svg';
  color: string = '#431eb1';
}
