import {Component} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";


@Component({
  selector: 'app-buy',
  standalone: true,
  imports: [
    FooterComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})

export class CarsComponent {
  url: string = 'https://www.autoscout24.ch/de/hci/list?design=4669&filter=9895';
}
