import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-weekly1',
  imports: [CommonModule, RouterModule, FooterComponent],
  templateUrl: './weekly1.component.html',
  styleUrl: './weekly1.component.css',
})
export class Weekly1Component {
  constructor(private router: Router) {}
  imageHome: string = 'assets/imgs/home.png';
  imageAbout: string = 'assets/imgs/about.png';
  imgBG: string = 'assets/svg/bg.svg';

  gotoWeek1() {
    this.router.navigate(['/week-1']);
  }
}
