import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-challenges',
  imports: [CommonModule],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChallengesComponent {
  homeBG: string = 'assets/svg/2.svg';
}
