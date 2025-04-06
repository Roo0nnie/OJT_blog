import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-week-8',
  imports: [CommonModule, FooterComponent],
  templateUrl: './week-8.component.html',
  styleUrl: './week-8.component.css',
})
export class Week8Component {
  homeBG5: string = 'assets/svg/5.svg';
  color: string = '#431eb1';

  systemPercent: string = 'assets/svg/week9_systemPercent.svg';

  ImageIssue: string = 'assets/svg/week8_image.svg';
  SecurityIssue: string = 'assets/svg/week8_security.svg';
  angularIssue: string = 'assets/svg/week8_issueAngular.svg';
  ValidationIssue: string = 'assets/svg/week8_validation.svg';
  SummaryIssue: string = 'assets/svg/week8_summary.svg';

  system_description = [
    {
      title:
        'The system is currently about 50% complete, with an estimated timeline of one to two months for full completion based on current progress. Core features such as reporting and chat integration have already been successfully implemented, while other features are still in development. Additionally, user authentication and dispute management are in progress, and once these final components are completed, the system will be ready for full deployment.',
    },
  ];
}
