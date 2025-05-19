import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-week-5',
  imports: [CommonModule, FooterComponent],
  templateUrl: './week-5.component.html',
  styleUrl: './week-5.component.css'
})
export class Week5Component {
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
        ' Developed a new user module with complete CRUD functionality.',
    },
    {
      description:
        'Finalized the Admin Panel by adding data export options for improved data management.',
    },
    {
      description:
        'Implemented advanced search and filtering options to enhance user experience..',
    },
  ];

  weekSummary = [
    {
      CONTENT:
        'This week, I focused on enhancing the Admin Panel and User Management by implementing CRUD operations, search, and filtering for better usability. I also strengthened system security through session-based authentication and added PDF data export for efficient reporting. These improvements streamlined user management and set a strong foundation for future module development.',
    },
  ];

}
