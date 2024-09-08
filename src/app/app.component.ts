import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {HomeComponent} from "./home/home.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NavigationComponent} from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatButtonToggle, MatButton, MatIcon, HomeComponent, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, MatIconButton, MatAnchor, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private scrollListener: (() => void) | undefined;

  @ViewChild('header', {static: false}) header: ElementRef | undefined;

  constructor(private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    if (this.header) {
      this.scrollListener = this.renderer.listen('window', 'scroll', () => {
        const headerElement = this.header?.nativeElement;
        if (window.scrollY === 0) {
          this.renderer.removeClass(headerElement, 'shadow');
        } else {
          this.renderer.addClass(headerElement, 'shadow');
        }
      });
    }
  }

  contactLRLPerWhatsapp() {
    window.open('https://wa.me/41766291070');
  }

  changeRoute() {
    window.scroll({
      behavior: 'smooth',
      top: 0,
      left: 0,
    });
  }
}
