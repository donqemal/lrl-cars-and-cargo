import {NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
import {AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from "./pages/home/home.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {IntersectionObserverDirective} from "./directives/intersection-observer.directive";
import {CommonModule} from "@angular/common";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HomeComponent, RouterLink, NavigationComponent, IntersectionObserverDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: []
})
export class AppComponent implements AfterViewInit {
  @ViewChild('loader', {static: false}) loader: ElementRef | undefined;
  @ViewChild('cursor', {static: false}) cursor: ElementRef | undefined;

  constructor(private renderer: Renderer2, private router: Router) {
    document.documentElement.classList.add('js');

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Small delay to allow DOM to update after navigation
      setTimeout(() => this.handleReveal(), 100);
      setTimeout(() => this.handleReveal(), 500);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.handleParallax();
    this.handleReveal();
  }

  @HostListener('window:pointermove', ['$event'])
  onPointerMove(e: PointerEvent) {
    if (this.cursor) {
      this.renderer.setStyle(this.cursor.nativeElement, 'left', e.clientX + 'px');
      this.renderer.setStyle(this.cursor.nativeElement, 'top', e.clientY + 'px');
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.loader) {
        this.renderer.removeStyle(this.loader.nativeElement, 'display');
        setTimeout(() => {
          this.renderer.removeChild(document.body, this.loader?.nativeElement);
          // Trigger scroll check after loader is gone to ensure initial animations fire
          this.onWindowScroll();
        }, 1400);
      }
    }, 0);

    this.setupCursorInteractions();
    setTimeout(() => this.onWindowScroll(), 100);
    setTimeout(() => this.onWindowScroll(), 500);
  }

  private setupCursorInteractions() {
    const interactables = document.querySelectorAll('a, button, .car-card, .service');
    interactables.forEach(el => {
      this.renderer.listen(el, 'pointerenter', () => this.cursor?.nativeElement.classList.add('big'));
      this.renderer.listen(el, 'pointerleave', () => this.cursor?.nativeElement.classList.remove('big'));
    });
  }

  private handleParallax() {
    const parallaxEls = document.querySelectorAll('.parallax');
    parallaxEls.forEach(el => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.dataset['speed'] || '0');
      const r = element.getBoundingClientRect();
      // Only apply if the element is in the viewport
      if (r.bottom > 0 && r.top < window.innerHeight) {
        // Adjust the calculation to be relative to the viewport top
        this.renderer.setStyle(element, 'transform', `translate3d(0,${r.top * speed}px,0)`);
      }
    });
  }

  private handleReveal() {
    const revealEls = document.querySelectorAll('.reveal, .split-text');
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Elements that are already in or above the viewport should be visible
      // Added a larger buffer and check if it's already visible to avoid redundant calls
      if (rect.top < window.innerHeight * 1.15) {
        this.renderer.addClass(el, 'visible');
      }
    });
  }

  contactLRLPerWhatsapp() {
    window.open('https://wa.me/41766291070');
  }

  changeRoute() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
