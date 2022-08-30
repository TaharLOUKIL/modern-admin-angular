import { Directive, ElementRef, Input, HostListener, AfterViewInit } from '@angular/core';
/* eslint-disable @angular-eslint/directive-selector */
@Directive({
  selector: '[matchHeight]'
})
export class MatchHeightDirective implements AfterViewInit {
  // class name to match height
  @Input()
  matchHeight: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // call our matchHeight function here
    setTimeout(() => {
      this.matchHeights(this.el.nativeElement, this.matchHeight);
    }, 700);
  }

  matchHeights(parent: HTMLElement, className: string) {
    if (!parent) {
      return;
    }

    // step 1: find all the child elements with the selected class name
    const children = parent.getElementsByClassName(className);

    if (!children) {
      return;
    }

    // Match hight - fix --- comment below code
    Array.from(children).forEach((x: HTMLElement) => {
      x.style.height = 'initial';
    });

    // step 2a: get all the child elements heights
    const itemHeights = Array.from(children).map(
      x => x.getBoundingClientRect().height
    );

    // step 2b: find out the tallest
    const maxHeight = itemHeights.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    }, 0);

    // step 3: update all the child elements to the tallest height
    if (window.innerWidth > 1200) {
      Array.from(children).forEach(
        (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
      );
    } else if (window.innerWidth < 1199) {
      Array.from(children).forEach(
        (x: HTMLElement) => (x.style.height = `initial`)
      );
    }
  }

  @HostListener('window:resize')
  onResize() {
    // call our matchHeight function here
    this.matchHeights(this.el.nativeElement, this.matchHeight);
  }
}
