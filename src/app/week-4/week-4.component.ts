import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { ChallengesComponent } from '../week-3/sections/challenges/challenges.component';

@Component({
  selector: 'app-week-4',
  imports: [CommonModule, FooterComponent, ChallengesComponent],
  templateUrl: './week-4.component.html',
  styleUrl: './week-4.component.css',
})
export class Week4Component {
  homeBG: string = 'assets/svg/4.svg';
  homeBG5: string = 'assets/svg/5.svg';
  taskCompleted: string = 'assets/svg/task_completed.svg';
  pattern: string = 'assets/svg/6.svg';
  summary: string = 'assets/svg/summary.svg';
  keyLearning: string = 'assets/svg/key_learning.svg';
  color: string = '#431eb1';
}
