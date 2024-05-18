import {Component} from '@angular/core';
import {FooterComponent} from "../footer/footer.component";
import {EmbeddedContentComponent} from "../embedded-content/embedded-content.component";


@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    FooterComponent,
    EmbeddedContentComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})

export class CarsComponent {
}
