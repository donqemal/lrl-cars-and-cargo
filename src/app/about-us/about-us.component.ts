import { Component } from '@angular/core';

import {FooterComponent} from "../footer/footer.component";
import {IntersectionObserverDirective} from "../intersection-observer.directive";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    FooterComponent,
    IntersectionObserverDirective
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  protected readonly window = window;
}
