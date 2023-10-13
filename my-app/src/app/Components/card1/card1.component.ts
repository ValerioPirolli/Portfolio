import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component {
  classesp = false;
  classecc = false;
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['prev', 'next'],
    items: 1,
    nav: true,
  }
  togglecc() {
    this.classecc = !this.classecc;
  }
  togglesp() {
    this.classesp = !this.classesp;
  }
}
