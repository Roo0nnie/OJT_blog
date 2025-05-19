import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-12',
  imports: [CommonModule],
  templateUrl: './week-12.component.html',
  styleUrl: './week-12.component.css'
})
export class Week12Component {
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
        'Implemented Tasker/Client filter by specialization on their home page. This is necessary as the user can filter out what they want or not.',  
    },
    {
      description:
        'Enhanced task filtering for taskers and clients on both the home page and pending page.',
    },
    {
      description:
        'Developed a Task Confirmation feature, ensuring only one tasker can be assigned to a task.',  
    },  
    {
      description:
        'Implemented Tasker Scheduler, enabling taskers to set their preferred working schedule and it will be available for the client to assign its task to the tasker.',
    },
  ];
}
