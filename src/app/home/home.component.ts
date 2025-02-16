import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  imageHome: string = 'assets/imgs/home.png';
  imageAbout: string = 'assets/imgs/about.png';
  imgBG: string = 'assets/svg/bg.svg';

  openModal() {
    const modal = document.getElementById('flowbiteModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeModal() {
    const modal = document.getElementById('flowbiteModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
}
