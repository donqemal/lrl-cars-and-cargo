import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  protected readonly window = window;
}
