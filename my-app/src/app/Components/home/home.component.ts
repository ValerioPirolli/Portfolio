
  import { Component, OnInit, ElementRef } from '@angular/core';
  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  })
  export class HomeComponent implements OnInit{
    typedText: string = '';
    originalText: string = "Hi there i'm Valerio, a junior Web Developer passionate about coding and web Design.";
    aboutIndex: number = 0;
    currentIndex: number = 0;
    typingSpeed: number = 70 ;
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
      this.type();
    }

    type() :void{
      if (this.currentIndex < this.originalText.length) {
        this.typedText += this.originalText.charAt(this.currentIndex);
        this.currentIndex++;
        setTimeout(() => this.type(), this.typingSpeed);
    }
  }}
