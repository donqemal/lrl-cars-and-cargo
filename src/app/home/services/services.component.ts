import {Component} from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: any = [
    {id: 1, description: 'Verkauf', text: 'Verkaufen Sie Ihr Auto einfach und schnell!'},
    {id: 2, description: 'Ankauf', text: 'Wir kaufen Ihr Auto zum Bestpreis!'},
    {id: 3, description: 'Transport', text: 'Transport Ihres Autos zu Ihnen nach Hause!'},
    {id: 4, description: 'Support', text: 'Unterstützung bei allen Fragen rund um Ihr Auto!'},
  ];
}
