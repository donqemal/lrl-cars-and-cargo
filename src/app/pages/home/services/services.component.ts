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
  services: any = [
    {id: 1, description: 'Verkauf', text: 'Finden Sie jetzt Ihr Traumauto!'},
    {id: 2, description: 'Ankauf', text: 'Wir kaufen Ihr Auto zum Bestpreis!'},
    {id: 3, description: 'Unschlagbare Preise', text: 'Die besten Preise auf dem Markt!'},
    {id: 4, description: 'Transport', text: 'Transport Ihres Autos zu Ihnen nach Hause!'},
    {id: 5, description: 'Support', text: 'Unterstützung bei allen Fragen rund um Ihr Auto!'},
  ];
}
