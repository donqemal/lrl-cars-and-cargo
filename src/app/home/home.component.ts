import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  services: any = [
    {id: 1, description: 'Verkauf', text: 'Verkaufen Sie Ihr Auto einfach und schnell!'},
    {id: 2, description: 'Ankauf', text: 'Wir kaufen Ihr Auto zum Bestpreis!'},
    {id: 3, description: 'Transport', text: 'Transport Ihres Autos zu Ihnen nach Hause!'},
    {id: 4, description: 'Support', text: 'Unterstützung bei allen Fragen rund um Ihr Auto!'},
  ];

  constructor(private router: Router) {
  }


  cars: string[] = ['carousel-car1', 'carousel-car2', 'carousel-car3', 'carousel-car4', 'carousel-car5'];

  // brands: string[] = ['audi', 'alfa-romeo', 'bmw', 'mercedes', 'vw', 'renault'];

  navigatePage(page: string) {
    this.router.navigate([page]);
  }
}
