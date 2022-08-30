import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent implements OnInit {

  public showFooter = true;
  public showNavbar = true;

  constructor(private renderer: Renderer2,
    private router: Router,
    @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.renderer.removeClass(document.body, 'vertical-overlay-menu');
    this.renderer.removeClass(document.body, 'bg-full-screen-image');
    this.renderer.removeClass(document.body, 'vertical-menu-modern');
    this.renderer.addClass(document.body, 'blank-page');
    this.renderer.addClass(document.body, 'pace-done');

    if ((this.router.url.indexOf('WithNavbar') >= 0) || (this.router.url.indexOf('Advanced') >= 0)) {
      this.showFooter = true;
      this.showNavbar = true;
      this.renderer.addClass(document.body, 'bg-cyan');
      this.renderer.addClass(document.body, 'bg-lighten-2');
      this.renderer.addClass(document.body, 'fixed-navbar');
      this.renderer.removeClass(document.body, 'blank-page');
    } else if (this.router.url.indexOf('WithBgImage') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.addClass(document.body, 'bg-full-screen-image');
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('WithBg') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.addClass(document.body, 'bg-cyan');
      this.renderer.addClass(document.body, 'bg-lighten-2');
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('Simple') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('searchPage') >= 0) {
      this.showFooter = true;
      this.showNavbar = true;
      this.renderer.addClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('flat') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonFlat');
    } else if (this.router.url === '/others/bgImage') {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonOne');
    } else if (this.router.url.indexOf('bgVideo') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonVideo');
    } else if (this.router.url.indexOf('flat') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
      this.renderer.addClass(document.body, 'comingsoonFlat');
    } else if (this.router.url.indexOf('error400') >= 0 && this.router.url.indexOf('error400Withnavbar') <= 0 ) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error401') >= 0 && this.router.url.indexOf('error401Withnavbar') <= 0 ) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error403') >= 0 && this.router.url.indexOf('error403Withnavbar') <= 0 ) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error404') >= 0 && this.router.url.indexOf('error404Withnavbar') <= 0 ) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('error500') >= 0 && this.router.url.indexOf('error500Withnavbar') <= 0 ) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('maintenance') >= 0  || this.router.url.indexOf('recoverPassword') >= 0) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else if (this.router.url.indexOf('unlockUser') >= 0 ) {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'fixed-navbar');
    } else {
      this.showFooter = false;
      this.showNavbar = false;
      this.renderer.removeClass(document.body, 'bg-cyan');
      this.renderer.removeClass(document.body, 'bg-lighten-2');
    }
  }

  rightbar(event) {
    const toggle = document.getElementById('sidenav-overlay');
    if (event.currentTarget.className === 'sidenav-overlay d-block') {
      this.renderer.removeClass(toggle, 'd-block');
      this.document.body.classList.remove('menu-open');
      this.document.body.classList.add('menu-close');
      this.renderer.addClass(toggle, 'd-none');
    } else if (event.currentTarget.className === 'sidenav-overlay d-none') {
      this.renderer.removeClass(toggle, 'd-none');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this.renderer.addClass(toggle, 'd-block');
    }
  }

}
