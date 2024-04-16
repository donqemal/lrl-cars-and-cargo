import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIcon,
    NgIf,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  mobileNavigationVisible: boolean = false;

  constructor(private router: Router) {
  }

  toggleMobileNavigation() {
    this.mobileNavigationVisible = !this.mobileNavigationVisible;
  }

  async navigatePage(page: string) {
    this.mobileNavigationVisible = false;
    await this.router.navigate([page]);
  }
}
