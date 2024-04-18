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
    {id: 1, description: 'Verkauf'},
    {id: 2, description: 'Ankauf'},
    {id: 3, description: 'Transport'},
    {id: 4, description: 'Support'},
  ];

  constructor(private router: Router) {
  }


  cars: string[] = ['carousel-car1', 'carousel-car2', 'carousel-car3', 'carousel-car4', 'carousel-car5'];

  // brands: string[] = ['audi', 'alfa-romeo', 'bmw', 'mercedes', 'vw', 'renault'];

  navigatePage(page: string) {
    this.router.navigate([page]);
  }
}
