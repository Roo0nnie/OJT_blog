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
  constructor(private router: Router) {}

  navList: string[] = ['HOME', 'ABOUT', 'COMPANY'];

  getRoute(navList: string): string {
    return '/' + navList.toLowerCase();
  }

  isActive(navItem: string): boolean {
    if (this.router.url === '/week-1' && navItem.toLowerCase() === 'home') {
      return true;
    }
    return this.router.url === this.getRoute(navItem);
  }
}
