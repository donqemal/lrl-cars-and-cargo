import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {IntersectionObserverDirective} from "../../../directives/intersection-observer.directive";

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

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const parallaxImg = document.querySelector('.parallax-img') as HTMLElement;
    const scrollPosition = window.scrollY;
    parallaxImg.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  }

  navigatePage(page: string) {
    this.router.navigate([page]);
  }
}
