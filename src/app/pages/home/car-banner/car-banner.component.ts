import { Component } from '@angular/core';
import {IntersectionObserverDirective} from "../../../directives/intersection-observer.directive";
import {BenefitsComponent} from "../benefits/benefits.component";
import {SwipeImagesComponent} from "../swipe-images/swipe-images.component";

@Component({
  selector: 'app-car-banner',
  standalone: true,
  imports: [
    IntersectionObserverDirective,
    BenefitsComponent,
    SwipeImagesComponent
  ],
  templateUrl: './car-banner.component.html',
  styleUrl: './car-banner.component.scss'
})
export class CarBannerComponent {

}
