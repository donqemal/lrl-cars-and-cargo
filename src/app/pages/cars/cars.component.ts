import {Component} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {EmbeddedContentComponent} from "../../components/embedded-content/embedded-content.component";
import {IntersectionObserverDirective} from "../../directives/intersection-observer.directive";


@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    FooterComponent,
    EmbeddedContentComponent,
    IntersectionObserverDirective,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss',
})

export class CarsComponent {

  finishedLoading() {
    // select the spinner and remove it
    const spinner = document.querySelector('.loader');
    spinner?.remove();
  }
}
