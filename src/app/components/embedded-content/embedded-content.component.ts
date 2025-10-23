import {Component, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'app-embedded-content',
  standalone: true,
  imports: [],
  templateUrl: './embedded-content.component.html',
  styleUrl: './embedded-content.component.scss'
})
export class EmbeddedContentComponent implements OnInit {
  @Output() finishedLoading = new EventEmitter<void>();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.loadScript('https://www.autoscout24.ch/assets/hci/v2/hci.current.js');
  }

  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onload = () => this.checkRender();
    this.renderer.appendChild(document.body, script);
  }

  checkRender() {
    const interval = setInterval(() => {
      if (document.querySelector('#hci-frame-2361-0')) {
        clearInterval(interval);
        this.finishedLoading.emit();
      }
    }, 500);
  }
}
