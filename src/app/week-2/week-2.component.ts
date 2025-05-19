import { Component } from '@angular/core';
import { PhotoComponent } from "../photo/photo/photo.component";

@Component({
  selector: 'app-week-2',
  imports: [PhotoComponent],
  templateUrl: './week-2.component.html',
  styleUrl: './week-2.component.css'
})
export class Week2Component {
  homeBG: string = 'assets/svg/2.svg';
  homeBG5: string = 'assets/svg/5.svg';
  system: string = 'assets/svg/system_w1.svg';
  color: string = '#431eb1';
  profile_2: string = 'assets/svg/profile_2.svg';
  mine: string = 'assets/svg/mine.svg';
  systemDesign: string = 'assets/svg/system_design_w1.svg';
  summary: string = 'assets/svg/summary.svg';
  ronnie: string = 'assets/svg/ronnie.svg';
  cess: string = 'assets/svg/cess.svg';
  eder: string = 'assets/svg/eder.svg';
  cla: string = 'assets/svg/cla.svg';


  installError: string = 'assets/svg/install_error.svg';
  timeManagement: string = 'assets/svg/time_management.svg';
  pageError: string = 'assets/svg/page_error.svg';
  serverError: string = 'assets/svg/server_error.svg';

  system_description = [
    {
      title:
        ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, iste illum quam dignissimos ipsam voluptas vero, quidem veritatis ut vitae earum odit nobis consectetur fuga dolores unde voluptatem, nisi ad.. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem doloribus tenetur quis inventore, impedit maxime rerum nobis temporibus aperiam corporis culpa repellendus! Aut, minima iusto possimus quos repellat animi accusamus.. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis quaerat velit porro. Rem quidem aperiam voluptatem vitae dicta consequuntur qui facilis molestias ipsam repellendus. Facilis necessitatibus veritatis perspiciatis animi.',
    },
  ];
}
