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
  navList: string[] = ['HOME', 'ABOUT', 'COMPANY', 'WEEK'];
  weekList: string[] = ['Week-1', 'Week-2', 'Week-3']; // Dropdown items
  isDropdownOpen = false;

  constructor(private router: Router) {}

  getRoute(navItem: string): string {
    return '/' + navItem.toLowerCase().replace(/\s+/g, '-');
  }

  isActive(navItem: string): boolean {
    return this.router.url === this.getRoute(navItem);
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
