import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {IntersectionObserverDirective} from "../../intersection-observer.directive";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    IntersectionObserverDirective
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(private router: Router) {
  }

  navigatePage(page: string) {
    this.router.navigate([page]);
  }
}
