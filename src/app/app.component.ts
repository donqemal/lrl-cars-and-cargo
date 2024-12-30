import {trigger, transition, style, animate, query} from '@angular/animations';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {HomeComponent} from "./home/home.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NavigationComponent} from "./navigation/navigation.component";
import {IntersectionObserverDirective} from "./intersection-observer.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatButtonToggle, MatButton, MatIcon, HomeComponent, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, MatIconButton, MatAnchor, NavigationComponent, IntersectionObserverDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            opacity: 0
          })
        ], {optional: true}),
        query(':enter', [
          style({opacity: 0}),
          animate('700ms ease-in-out', style({opacity: 1})),
        ], {optional: true}),
        query(':leave', [
          animate('700ms ease-in-out', style({opacity: 0})),
        ], {optional: true})
      ])
    ])
  ]
})
export class AppComponent implements AfterViewInit {
  @ViewChild('header', {static: false}) header: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    if (this.header) {
      this.renderer.listen('window', 'scroll', () => {
        const headerElement = this.header?.nativeElement;
        if (window.scrollY === 0) {
          this.renderer.removeClass(headerElement, 'shadow');
        } else {
          this.renderer.addClass(headerElement, 'shadow');
        }
      });
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
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
