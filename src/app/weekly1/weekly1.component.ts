import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-weekly1',
  imports: [CommonModule, FooterComponent],
  templateUrl: './weekly1.component.html',
  styleUrl: './weekly1.component.css',
})
export class Weekly1Component {
  homeBG: string = 'assets/svg/2.svg';
  homeBG5: string = 'assets/svg/5.svg';
  color: string = '#431eb1';
}
