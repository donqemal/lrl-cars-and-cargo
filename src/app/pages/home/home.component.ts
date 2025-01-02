import {Component} from '@angular/core';
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
export class HomeComponent {
}
