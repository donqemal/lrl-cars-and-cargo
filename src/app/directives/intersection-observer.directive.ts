import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const directionClass = this.getDirectionClass();

          switch (directionClass) {
            case 'top':
              this.el.nativeElement.classList.add('from-top');
              break;
            case 'left':
              this.el.nativeElement.classList.add('from-left');
              break;
            case 'right':
              this.el.nativeElement.classList.add('from-right');
              break;
            case 'bottom':
              this.el.nativeElement.classList.add('from-bottom');
              break;
            case 'slow-bottom':
              this.el.nativeElement.classList.add('from-bottom-slow');
              break;
            default:
              this.el.nativeElement.classList.add('from-left'); // Default animation
          }
          observer.unobserve(this.el.nativeElement);
        }
      });
    });

    observer.observe(this.el.nativeElement);
  }

  private getDirectionClass(): string {
    if (this.el.nativeElement.classList.contains('animate-top')) return 'top';
    if (this.el.nativeElement.classList.contains('animate-left')) return 'left';
    if (this.el.nativeElement.classList.contains('animate-right')) return 'right';
    if (this.el.nativeElement.classList.contains('animate-bottom')) return 'bottom';
    if (this.el.nativeElement.classList.contains('animate-bottom-slow')) return 'slow-bottom';
    return ''; // Default or empty if no directional class is found
  }
}
