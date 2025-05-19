import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-10',
  imports: [CommonModule],
  templateUrl: './week-10.component.html',
  styleUrl: './week-10.component.css'
})
export class Week10Component {
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
        'Implemented task assignment functionality, allowing taskers and clients to interact by accepting or rejecting tasks. This helps clients find suitable taskers,  and taskers can choose tasks they are willing to complete.',  
    },
    {
      description:
        'Designed and improved the notification system for taskers, making sure they do not send the same task request multiple times. This prevents confusion and keeps the process clear.',
    },
    {
      description:
        'Completed the task assignment system,, making sure clients and taskers can properly confirm or decline task assignments, ensuring clear communication between both users.',  
    },  
    {
      description:
        'Moved the profile page to a menu icon (more.vert) and replaced it with the task page, making it easier for users to find and manage their overall tasks',
    },
    {
      description:
        'Developed a dynamic record card display for both taskers and clients, which means task information loads faster and more efficiently without slowing down the system.',
    },
    {
      description:
        'Enhanced task management, making sure clients and taskers can smoothly communicate and complete tasks, improving their overall experience.',
    },
  ];
}
