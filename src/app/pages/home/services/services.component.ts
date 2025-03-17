import {Component} from '@angular/core';
import {IntersectionObserverDirective} from "../../../directives/intersection-observer.directive";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    IntersectionObserverDirective
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
