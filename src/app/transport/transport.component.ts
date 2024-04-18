import { Component } from '@angular/core';
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [
    FooterComponent
  ],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {

}
