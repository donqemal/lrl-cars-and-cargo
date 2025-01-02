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
    height: 30px !important;
    width: 30px !important;
    padding: 15px !important;
    background: rgba(0, 0, 0, 0.7) !important;
    border-radius: 100% !important;
  `;
    nextButton.style.cssText = buttonStyle;
    prevButton.style.cssText = buttonStyle;
  }
}
