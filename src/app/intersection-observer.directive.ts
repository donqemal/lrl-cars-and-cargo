import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('show');
          if (this.el.nativeElement.classList.contains('run-once') || window.innerWidth < 768) {
            observer.unobserve(this.el.nativeElement);
          }
        } else {
          this.el.nativeElement.classList.remove('show');
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }
}
