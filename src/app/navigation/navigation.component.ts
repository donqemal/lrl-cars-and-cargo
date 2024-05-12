import {Component, ElementRef, HostListener} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

import {Router, RouterLink} from "@angular/router";
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    NgClass,
    CommonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  mobileNavigationVisible: boolean = false;

  constructor(private router: Router, private elementRef: ElementRef) {
  }

  toggleMobileNavigation() {
    this.mobileNavigationVisible = !this.mobileNavigationVisible;
  }

  async navigatePage(page: string) {
    this.mobileNavigationVisible = false;
    await this.router.navigate([page]);
  }

  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    const clickedElement = event.target as HTMLElement;
    const isInsideIcon = clickedElement.classList.contains('mat-icon');

    if (!this.elementRef.nativeElement.contains(clickedElement) && !isInsideIcon && this.mobileNavigationVisible) {
      this.toggleMobileNavigation();
    }
  }

  @HostListener('document:scroll')
  onScroll() {
    if (this.mobileNavigationVisible) {
      this.toggleMobileNavigation();
    }
  }
}
