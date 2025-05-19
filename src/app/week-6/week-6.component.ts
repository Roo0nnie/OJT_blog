import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-week-6',
  imports: [CommonModule],
  templateUrl: './week-6.component.html',
  styleUrl: './week-6.component.css'
})
export class Week6Component {
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
        'Created a user management pagination system to efficiently display and navigate user records.',  
    },
    {
      description:
        'Implemented role-based access control for admin and moderator roles, ensuring each role has the appropriate permissions.',
    },
    {
      description:
        'Fixed routing configurations to limit admin and moderator roles from accessing sections they should not view.',  
    },  
    {
      description:
        'Enhanced login security by applying HTTP security protocols, ensuring that only secure requests are processed by the backend.',
    },
  ];

  
}
