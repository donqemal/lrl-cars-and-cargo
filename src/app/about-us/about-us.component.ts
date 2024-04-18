import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    NgIf,
    FooterComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  protected readonly window = window;
}
