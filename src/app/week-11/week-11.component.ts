import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-11',
  imports: [CommonModule],
  templateUrl: './week-11.component.html',
  styleUrl: './week-11.component.css'
})
export class Week11Component {
  homeBG: string = 'assets/svg/4.svg';
  homeBG5: string = 'assets/svg/5.svg';
  taskCompleted: string = 'assets/svg/completed_w4.svg';
  target: string = 'assets/svg/target_w4.svg';
  pattern: string = 'assets/svg/6.svg';
  summary: string = 'assets/svg/summary.svg';
  keyLearning: string = 'assets/svg/key_learning.svg';
  think: string = 'assets/svg/think.svg';
  summary_w4: string = 'assets/svg/summary_w4.svg';
  color: string = '#431eb1';
  nearByTask: string = 'assets/svg/system_w1.svg';
  timeline = [
    {
      description:
        'Designed and developed the Rejected UI for both taskers and clients, allowing them to easily see and track their rejected tasks.',  
    },
    {
      description:
        'Added a search bar to the "Post Task" section for clients, making it easier to find specific tasks.',
    },
    {
      description:
        'Improved the Ongoing UI for clients, including a control to stop tasks and a section for rating and feedback.',  
    },  
    {
      description:
        'Enhanced the Ongoing UI for taskers, displaying only the remaining time for tasks, making it clearer and see the remaining time they got to do the task.',
    },
  ];
}
