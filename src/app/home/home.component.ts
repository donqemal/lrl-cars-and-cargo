import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatIcon
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

  cars: string[] = ['carousel-car1', 'carousel-car2', 'carousel-car3'];

  brands: string[] = ['audi', 'alfa-romeo', 'bmw', 'mercedes', 'vw', 'renault'];
}
