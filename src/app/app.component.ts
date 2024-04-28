import {Component} from '@angular/core';

import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatButtonToggle} from "@angular/material/button-toggle";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {HomeComponent} from "./home/home.component";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {NavigationComponent} from "./navigation/navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatButtonToggle, MatButton, MatIcon, HomeComponent, RouterLink, MatMenuTrigger, MatMenu, MatMenuItem, MatIconButton, MatAnchor, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  contactLRLPerWhatsapp() {
    window.open('https://wa.me/41766291070');
  }

  changeRoute() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
