import {Component, OnInit, Renderer2} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {SwipeImagesComponent} from "./swipe-images/swipe-images.component";
import {BenefitsComponent} from "./benefits/benefits.component";
import {CarBannerComponent} from "./car-banner/car-banner.component";
import {ServicesComponent} from "./services/services.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NgClass} from "@angular/common";
import {IntersectionObserverDirective} from "../../directives/intersection-observer.directive";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomeComponent,
    ServicesComponent,
    CarBannerComponent,
    BenefitsComponent,
    SwipeImagesComponent,
    FooterComponent,
    NgClass,
    IntersectionObserverDirective
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadScript('https://app.reviewconnect.me/embed/5WQYwcO7MTFrnW0b0ypTQa4PLSL02AUZ/widget.js');
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
