import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'LRL-CarsAndCargo';
  services: any = [
    {id: 1, description: 'Verkauf'},
    {id: 2, description: 'Ankauf'},
    {id: 3, description: 'Transport'},
    {id: 4, description: 'Support'},
  ];

  cars: string[] = ['carousel-car1', 'carousel-car2', 'carousel-car3'];
  brands: string[] = ['audi', 'alfa-romeo', 'bmw', 'mercedes', 'vw', 'renault'];
}
