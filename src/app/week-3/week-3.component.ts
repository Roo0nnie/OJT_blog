import { ChallengesComponent } from './sections/challenges/challenges.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-week-3',
  imports: [CommonModule, FooterComponent, ChallengesComponent],
  templateUrl: './week-3.component.html',
  styleUrl: './week-3.component.css',
})
export class Week3Component {
  homeBG: string = 'assets/svg/4.svg';
  homeBG5: string = 'assets/svg/5.svg';
  taskCompleted: string = 'assets/svg/task_completed.svg';
  pattern: string = 'assets/svg/6.svg';
  summary: string = 'assets/svg/summary.svg';
  keyLearning: string = 'assets/svg/key_learning.svg';
  color: string = '#431eb1';
}
