import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-swipe-images',
  standalone: true,
  imports: [],
  templateUrl: './swipe-images.component.html',
  styleUrl: './swipe-images.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwipeImagesComponent implements AfterViewInit {
  cars: string[] = ['carousel-car1', 'carousel-car2', 'carousel-car3', 'carousel-car4'];
  @ViewChild('swiperContainer') swiperContainer?: ElementRef;

  ngAfterViewInit() {
    const swiperContainer = this.swiperContainer!.nativeElement.shadowRoot;
    const nextButton = swiperContainer.querySelector('.swiper-button-next');
    const prevButton = swiperContainer.querySelector('.swiper-button-prev');

    const buttonStyle = `
    height: 12px;
    width: 12px;
    padding: 10px;
    background: rgba(80, 80, 80);
    border-radius: 100%;
    stroke: white;
    stroke-width: 2px;
  `;
    nextButton.style.cssText = buttonStyle;
    prevButton.style.cssText = buttonStyle;
  }
}
