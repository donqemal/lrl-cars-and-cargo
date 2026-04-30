import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
