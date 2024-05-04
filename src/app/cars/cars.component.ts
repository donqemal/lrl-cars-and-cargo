import {Component} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";


@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    FooterComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})

export class CarsComponent {
}
