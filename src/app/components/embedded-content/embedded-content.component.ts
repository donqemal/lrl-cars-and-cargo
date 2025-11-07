import {Component, OnInit, Renderer2} from '@angular/core';
import {IntersectionObserverDirective} from "../../directives/intersection-observer.directive";

@Component({
  selector: 'app-embedded-content',
  standalone: true,
  imports: [
    IntersectionObserverDirective
  ],
  templateUrl: './embedded-content.component.html',
  styleUrl: './embedded-content.component.scss'
})
export class EmbeddedContentComponent implements OnInit {

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.loadScript('https://www.autoscout24.ch/assets/hci/v2/hci.current.js');
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
  }
}
