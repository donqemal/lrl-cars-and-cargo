import { Component } from '@angular/core';
import {Location} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}
