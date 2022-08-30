import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-full-layout-navbar',
  templateUrl: './full-layout-navbar.component.html',
  styleUrls: ['./full-layout-navbar.component.css']
})
export class FullLayoutNavbarComponent {

  constructor(
    @Inject(DOCUMENT) private document: Document) { }

  toggleNavbar(e) {
    const navbar = this.document.getElementById('navbar-mobile');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    } else {
      navbar.classList.add('show');
    }
  }
  
}
