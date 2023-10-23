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
  black = false;
  visible = false;

  /*checkpoint = 300;
  currentScroll = window.pageYOffset;
  opacity = 1;*/
  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.visible = window.pageYOffset > 200;
    this.scrolled = window.pageYOffset > 311;
  }
}
