import { ChallengesComponent } from './sections/challenges/challenges.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { create } from 'domain';
import { title } from 'process';
import modules from 'tslib';

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
  nearByTask: string = 'assets/svg/system_w1.svg';
  systemDesign: string = 'assets/svg/system_design_w1.svg';

  installError: string = 'assets/svg/install_error.svg';
  timeManagement: string = 'assets/svg/time_management.svg';
  pageError: string = 'assets/svg/page_error.svg';
  serverError: string = 'assets/svg/server_error.svg';


  introduction = [
    {
      title: 'Introduction',
      content: 'Week three of my On-the-Job Training (OJT) was both exciting and nerve-wracking. Our team had to present a new system we planned to develop during OJT. The challenge was to create something simple yet useful and challenge-friendly.'
    },
    {
      content: 'We decided on NearByTask, a mobile platform designed for TESDA graduates to find job opportunities by completing client-posted tasks. Our goal was to create a system that generates income, but it wasn’t an easy decision. The project involved multiple modules and features, and we were assigned to build it using Flutter (for mobile) and Angular (for the admin panel)—two technologies we had no prior experience with.'
    },
    {
      content: 'This week, our main focus was to ensure the system’s feasibility and start coding the front-end.'
    }
  ]

  challenges = [
    {
      title: 'Installation Issues',
      content: 'I struggled with version mismatches in Node.js, which took hours to fix, However I updated Node.js, and the issue was resolved.'
    },
    {
      title: 'Routing Errors',
      content: 'Some pages wouldn’t load properly. Watching tutorials and  researching helped me understand routing structures and fix the issues.'
    },
    
    {
      title: 'Configuration failure',
      content: 'Connecting the frontend and backend while considering Flutter’s integration was tricky. Installing CORS and HTTP modules solved the problem.'
    },
    {
      title: 'Time Management',
      content: 'Balancing leadership duties and technical work was tough. Fixing unexpected errors delayed progress, but I learned to allocate time more efficiently.'
    }

  ]

}


