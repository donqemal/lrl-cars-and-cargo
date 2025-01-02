import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Router} from "@angular/router";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatIcon
],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) {
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  protected readonly window = window;
}
