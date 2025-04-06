import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-week-9',
  imports: [CommonModule, FooterComponent],
  templateUrl: './week-9.component.html',
  styleUrl: './week-9.component.css',
})
export class Week9Component {
  homeBG5: string = 'assets/svg/5.svg';
  color: string = '#431eb1';

  accessLimitation: string = 'assets/svg/week9_access.svg';
  loginDesign: string = 'assets/svg/week9_login.svg';
  meetingDiscord: string = 'assets/svg/week9_discord.svg';
  systemPercent: string = 'assets/svg/week9_systemPercent.svg';
  systemBacklogs: string = 'assets/svg/week9_backlogs.svg';

  system_description = [
    {
      title:
        'From the beginning of development up to the present, the system is approximately 60% complete. Based on the current progress, it is estimated that the remaining development can be completed within a month. Several core features such as rating, ranking, payment history, reporting, and feedback have already been completed. Meanwhile, the payment process, task management, and task assignment features are currently in progress. Additionally, user authentication, dispute management, account creation, user management, tasker negotiation, and tasker report are now under review. Once these remaining components are finalized, the system will be ready for full deployment.',
    },
  ];
}
