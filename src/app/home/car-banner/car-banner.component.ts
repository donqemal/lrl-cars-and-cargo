import { Component } from '@angular/core';
import {IntersectionObserverDirective} from "../../intersection-observer.directive";

@Component({
  selector: 'app-car-banner',
  standalone: true,
  imports: [
    IntersectionObserverDirective
  ],
  templateUrl: './car-banner.component.html',
  styleUrl: './car-banner.component.scss'
})
export class CarBannerComponent {

}
