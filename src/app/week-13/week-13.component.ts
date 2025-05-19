import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-13',
  imports: [CommonModule],
  templateUrl: './week-13.component.html',
  styleUrl: './week-13.component.css'
})
export class Week13Component {
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
        'We presented the Nearbytask system to our company CEO, where I showcased its core features and gathered final suggestions and comments for further improvements.',  
    },
    {
      description:
        'I finalized the design of the Nearbytask application by selecting and applying a fresh color scheme, adding smooth animations, and enhancing the user interface for a more intuitive experience.',
    },
    {
      description:
        'I personally resolved the logout issue by identifying the problem with Goroute, replacing it with a widget-based navigation system for stable transitions.',  
    },  
    {
      description:
        'I updated the user story after a detailed review with our company heads, Mr. and Mrs. Maxwell, ensuring that the features aligned with their recommendations.',
    },
    {
      description:
        'I managed the team by assigning tasks based on each member’s strengths, providing guidance, promoting active contribution, and maintaining progress.',
    },
  ];
}
