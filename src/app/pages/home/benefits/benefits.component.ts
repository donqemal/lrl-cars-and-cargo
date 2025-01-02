import {Component} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [
    NgClass
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
