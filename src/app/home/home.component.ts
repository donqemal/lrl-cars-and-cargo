import {Component, HostListener, OnInit} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {SwipeImagesComponent} from "./swipe-images/swipe-images.component";
import {BenefitsComponent} from "./benefits/benefits.component";
import {CarBannerComponent} from "./car-banner/car-banner.component";
import {ServicesComponent} from "./services/services.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {NgClass} from "@angular/common";

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
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  componentPositions: { [key: string]: number } = {};

  ngOnInit() {
    this.calculateComponentPositions();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.calculateComponentPositions();
  }

  calculateComponentPositions() {
    const components = ['services', 'car-banner', 'benefits', 'swipe-images'];
    components.forEach(component => {
      const element = document.querySelector(`app-${component}`);
      if (element) {
        const rect = element.getBoundingClientRect();
        this.componentPositions[component] = rect.top + window.scrollY;
      }
    });
  }

  isComponentVisible(component: string): boolean {
    return !!this.componentPositions[component] && this.componentPositions[component] < window.innerHeight + window.scrollY;
  }
}
