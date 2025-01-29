import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  email: string = '';
  password: string = '';
  confirm_password: string = '';
  first_name: string = '';
  last_name: string = '';
  phone: string = '';
  company: string = '';

  sample = 'This is just a sample';

  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'John Smith' },
    { id: 4, name: 'Jane Smith' },
    { id: 5, name: 'John Johnson' },
    { id: 6, name: 'Jane Johnson' },
    { id: 7, name: 'John Williams' },
    { id: 8, name: 'Jane Williams' },
  ];

  showUsers = true;

  showToggle(showValue: boolean): void {
    this.showUsers = showValue;
  }

  firstName: string = '';
  categories = [
    { id: '1', name: 'React' },
    { id: '2', name: 'Angular' },
    { id: '3', name: 'Vue' },
    { id: '4', name: 'Node' },
    { id: '5', name: 'Python' },
    { id: '6', name: 'Java' },
  ];

  categorySelected: string = '';
}
