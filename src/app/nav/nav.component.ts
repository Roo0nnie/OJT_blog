import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  navList: string[] = ['HOME', 'ABOUT', 'COMPANY', 'GALLERY', 'WEEK'];
  weekList: String[] = [
    'Week-1',
    'Week-2',
    'Week-3',
    'Week-4',
    'Week-5',
    'Week-6',
    'Week-7',
    'Week-8',
    'Week-9',
  ];
  isDropdownOpen = false;

  constructor(private router: Router) {}

  getRoute(navItem: String): string {
    return '/' + navItem.toLowerCase().replace(/\s+g/, '-');
  }

  isActive(navItem: string): boolean {
    return this.router.url === this.getRoute(navItem);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
