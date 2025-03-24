import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-week-4',
  imports: [CommonModule, FooterComponent],
  templateUrl: './week-4.component.html',
  styleUrl: './week-4.component.css',
})
export class Week4Component {
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

  timeline = [
    {
      day: 'CRUD Efficiency',
      description:
        ' Implementing CRUD operations in User Management made it easier to apply the same logic to other system modules.',
    },
    {
      day: 'User Usability ',
      description:
        'Adding search and filtering options improved data accessibility, making navigation more efficient for admins and moderators.',
    },
    {
      day: 'Session Security',
      description:
        'Implementing session storage ensured that only authorized users could access the system while maintaining a persistent login state.',
    },
    {
      day: 'Data Export ',
      description:
        ' Integrating PDF export functionality allowed admins and moderators to generate and store essential reports with ease.',
    },
  ];

  weekSummary = [
    {
      CONTENT:
        'This week, I focused on enhancing the Admin Panel and User Management by implementing CRUD operations, search, and filtering for better usability. I also strengthened system security through session-based authentication and added PDF data export for efficient reporting. These improvements streamlined user management and set a strong foundation for future module development.',
    },
  ];
}
