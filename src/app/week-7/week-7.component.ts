import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-week-7',
  imports: [NgClass, NgFor],
  templateUrl: './week-7.component.html',
  styleUrl: './week-7.component.css'
})
export class Week7Component {
  homeBG5: string = 'assets/svg/5.svg';
  color: string = '#431eb1';
  taskCompleted: string = 'assets/svg/completed_w4.svg';
  think: string = 'assets/svg/think.svg';

  introduction = [
    {
      title: 'Introduction',
      content: 'This week was focused on enhancing user management, particularly in client and tasker roles. I worked on key features such as client registration, email validation, account management, and tasker onboarding. Despite facing technical hurdles, I managed to implement crucial functionalities that improve system efficiency and security.',
      image: 'assets/svg/introduction_w7.svg'
    },

  ];

  learnings = [
    {
      title: 'Debugging Registration Issues',
      content: 'Applying tasker logic to client registration initially led to errors.'
    },
    {
      title: 'Email Validation in Mobile Developmen',
      content: 'Finding a way to integrate email verification in a mobile-based system.'
    },
    {
      title: 'Understanding a New Module',
      content: 'Account management required time to familiarize with, slowing progress.'
    },
    {
      title: 'Handling File Uploads',
      content: 'Encountered difficulties with managing document and image uploads properly.'
    }
  ];


  weekSummary = [
    {
      content: 'This week, I made significant progress in implementing user role registration, email validation, and profile management. While some challenges slowed development, particularly with debugging and file uploads, I was able to resolve key issues. Moving forward, I aim to improve efficiency in debugging and expand system functionality to further enhance user experience.',
      image: 'assets/svg/summary_w7.svg'
    },
  ];

}
