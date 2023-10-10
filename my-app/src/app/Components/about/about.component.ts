import { Component, HostListener, OnInit, Output, ElementRef } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  altezzaDiv:number = 0;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  nWindowScroll() {
  const myComponent = this.elementRef.nativeElement.querySelector('#about');
  this.altezzaDiv = myComponent.offsetTop;
  console.log(this.altezzaDiv)
}

}
