import { Directive, HostListener } from '@angular/core';
import { ScrollService } from './scroll.service';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  constructor(private scrollService: ScrollService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollPosition = window.scrollY;
    this.scrollService.updateScrollPosition(scrollPosition);
  }
}

