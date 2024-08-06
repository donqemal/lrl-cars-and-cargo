import { Component } from '@angular/core';
import {IntersectionObserverDirective} from "../../intersection-observer.directive";

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [
    IntersectionObserverDirective
  ],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  benefits: any = [
    "Jahrelange Erfahrung",
    "Zuverlässigkeit",
    "Moderne Flotte",
    "Pünktlichkeit",
    "Professionelle Transportlösung"
  ]
}
