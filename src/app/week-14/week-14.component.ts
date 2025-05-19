import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-14',
  imports: [CommonModule],
  templateUrl: './week-14.component.html',
  styleUrl: './week-14.component.css'
})
export class Week14Component {
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
        'I revised the client and tasker homepage by improving the swipe card interactions using filters through user preferences. Clients could swipe left to ignore taskers and right to save them, while taskers could swipe left to ignore tasks and right to save tasks.',  
    },
    {
      description:
        'I implemented tasker and client filters in the settings section, allowing users to filter by distance using geolocation dependency and converting latitude and longitude to actual locations using geoconvert.',
    },
    {
      description:
        'I enhanced filtering options by allowing users to filter based on specialization (e.g., plumber, constructor, developer) and client-specific age filtering for taskers.',  
    },  
    {
      description:
        'I managed the database by adding an address table to store real-time location data for both taskers and clients.',
    },
    {
      description:
        'I implemented geolocation functionality to accurately detect and display the real-time location of users.',
    },
  ];
}
