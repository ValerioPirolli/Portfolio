import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  scrolled = false;

  /*checkpoint = 300;
  currentScroll = window.pageYOffset;
  opacity = 1;*/
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolled = window.pageYOffset > 180;
  }

 /* @HostListener('window:scroll', ['$event'])
  onWindowScroll() {


    if (this.currentScroll <= this.checkpoint) {
      this.opacity = 1 - this.currentScroll / this.checkpoint;
    } else {
      this.opacity = 0;
    }

    // Effettua un cast esplicito a HTMLElement
    const element = document.querySelector(".front") as HTMLElement;
    if (element) {
      element.style.opacity = this.opacity.toString();
    }
  }*/
}
