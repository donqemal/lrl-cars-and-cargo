import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-swipe-images',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './swipe-images.component.html',
  styleUrl: './swipe-images.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwipeImagesComponent {
  cars: string[] = ['carousel-car1', 'carousel-car2', 'carousel-car3', 'carousel-car4'];
}
