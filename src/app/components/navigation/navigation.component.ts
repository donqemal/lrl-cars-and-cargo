import {Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

import {NavigationEnd, Router, RouterLink, RouterLinkActive} from "@angular/router";
import {CommonModule, NgClass} from "@angular/common";
import {filter, Subscription} from "rxjs";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    MatIcon,
    RouterLink,
    RouterLinkActive,
    NgClass,
    CommonModule
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('header', {static: false}) header: ElementRef | undefined;
  menuOpen = false;
  scrolled = false;
  contactActive = false;
  private observer: IntersectionObserver | null = null;
  private routerSubscription: Subscription | undefined;

  constructor(private router: Router, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.setupIntersectionObserver();
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small timeout to allow the DOM to render if navigating back to home
      setTimeout(() => this.setupIntersectionObserver(), 100);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private setupIntersectionObserver() {
    if (this.observer) {
      this.observer.disconnect();
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.contactActive = entry.isIntersecting;
        });
      }, {
        // Adjust threshold or rootMargin as needed.
        // 0.5 means when 50% of the section is visible.
        threshold: 0.3
      });
      this.observer.observe(contactSection);
    } else {
      this.contactActive = false;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 30;
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      this.toggleMenu(false);
    }
  }

  toggleMenu(force?: boolean) {
    this.menuOpen = force !== undefined ? force : !this.menuOpen;
    if (this.menuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    if (this.router.url === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
    this.toggleMenu(false);
  }
}
