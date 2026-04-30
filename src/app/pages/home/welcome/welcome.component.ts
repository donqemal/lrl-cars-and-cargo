import {Component, HostListener} from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(private router: Router) {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    // Parallax is handled globally in AppComponent
  }
}
