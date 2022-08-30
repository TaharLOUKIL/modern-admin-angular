import { Component, OnInit, Renderer2, HostListener, Inject } from '@angular/core';
import { ThemeSettingsService } from '../settings/theme-settings.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AppConstants } from '../../_helpers/app.constants';
import { Router, NavigationStart, NavigationEnd, Event, NavigationError } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NavbarService } from 'src/app/_services/navbar.service';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.css']
})
export class PrivateLayoutComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;
  private _themeSettingsConfig: any;
  public layout: any;
  public customizer: any;
  public buybutton: any;
  deviceInfo = null;

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private navbarService: NavbarService,
    private _themeSettingsService: ThemeSettingsService,
    private deviceService: DeviceDetectorService) {
    this._unsubscribeAll = new Subject();

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
      }
      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        if (this.router.url === '/chats' || this.router.url === '/chats/static-chat') {
          this.renderer.addClass(document.body, 'chat-application');
        } else {
          this.renderer.removeClass(document.body, 'chat-application');
        }

        if (this.router.url === '/email') {
          this.renderer.addClass(document.body, 'email-application');
        } else {
          this.renderer.removeClass(document.body, 'email-application');
        }

        if (this.router.url === '/contacts') {
          this.renderer.addClass(document.body, 'app-contacts');
        } else {
          this.renderer.removeClass(document.body, 'app-contacts');
        }

        if (this.router.url === '/todos') {
          this.renderer.addClass(document.body, 'todo');
        } else {
          this.renderer.removeClass(document.body, 'todo');
        }
        if (this.router.url === '/todo-app') {
          this.renderer.addClass(document.body, 'todo-application');
        } else {
          this.renderer.removeClass(document.body, 'todo-application');
        }
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
      }
    });
  }

  ngOnInit() {

    this.renderer.removeClass(document.body, 'bg-full-screen-image');

    // Subscribe to config changes
    this._themeSettingsService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this._themeSettingsConfig = config;
        if (localStorage.getItem('currentLayoutStyle')) {
          this._themeSettingsConfig.layout.style = localStorage.getItem('currentLayoutStyle');
        }
      });

    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    this.handleBody(isMobile);
    this.handleCollapsibleMenu();
  }

  handleBody(isMobile: boolean) {
    const _self = this;

    if (this._themeSettingsConfig.layout.style === 'vertical') {
      _self.renderer.setAttribute(document.body, 'data-menu', 'vertical-menu-modern');
    } else {
      _self.renderer.setAttribute(document.body, 'data-menu', 'horizontal-menu-modern');
    }

    let currentBodyClassList = [];
    this.layout = this._themeSettingsConfig.layout.style;
    this.customizer = this._themeSettingsConfig.customizer;
    this.buybutton = this._themeSettingsConfig.buybutton;
    // Vertical resposive view
    if (this._themeSettingsConfig.layout.style === 'vertical' &&
      window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      const previosBodyClassList = [].slice.call(document.body.classList);
      previosBodyClassList.forEach(function (c) {
        _self.renderer.removeClass(document.body, c);
      });
      if (this._themeSettingsConfig.layout.style === 'vertical') {
        currentBodyClassList = ['vertical-layout', 'vertical-overlay-menu', '2-columns', 'pace-done', 'menu-close', 'fixed-navbar'];
        if (this._themeSettingsConfig.layout.pattern === 'fixed') {
          currentBodyClassList.push('fixed-navbar');
        }
      } else {
        currentBodyClassList = ['vertical-layout', '2-columns', 'vertical-overlay-menu', 'pace-done', 'menu-hide'];
      }
      if (this._themeSettingsConfig.layout.pattern === 'fixed') {
        currentBodyClassList.push('fixed-navbar');
      }

      if (this._themeSettingsConfig.layout.pattern === '') {
        currentBodyClassList.push('fixed-navbar');
      }

      if (this._themeSettingsConfig.layout.pattern === 'boxed') {
        this.renderer.addClass(document.body, 'boxed-layout');
        this.renderer.addClass(document.body, 'container');
        this.renderer.addClass(document.body, 'fixed-navbar');
      }
      // Horizontal resposive view
    } else if (this._themeSettingsConfig.layout.style === 'horizontal' &&
      window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
      const previosBodyClassList = [].slice.call(document.body.classList);
      previosBodyClassList.forEach(function (c) {
        _self.renderer.removeClass(document.body, c);
      });
      currentBodyClassList = ['horizontal-layout', 'horizontal-menu', '2-columns', 'pace-done',
        'fixed-navbar', 'menu-hide'];

        if (this._themeSettingsConfig.layout.pattern === 'fixed') {
          currentBodyClassList.push('fixed-navbar');
        }

        if (this._themeSettingsConfig.layout.pattern === '') {
          currentBodyClassList.push('fixed-navbar');
        }

        if (this._themeSettingsConfig.layout.pattern === 'boxed') {
          this.renderer.addClass(document.body, 'boxed-layout');
          this.renderer.addClass(document.body, 'container');
          this.renderer.addClass(document.body, 'fixed-navbar');
        }
      // Normal view
    } else {
      const previosBodyClassList = [].slice.call(document.body.classList);
      let callapseOrExpanded = '';
      previosBodyClassList.forEach(function (c) {
        if (c === 'menu-collapsed') {
          callapseOrExpanded = 'menu-collapsed';
        } else if (c === 'menu-expanded') {
          callapseOrExpanded = 'menu-expanded';
        }
        _self.renderer.removeClass(document.body, c);
      });
      if (this._themeSettingsConfig.layout.style === 'vertical') {
        if (callapseOrExpanded === '') {
          const toggleIcon = document.getElementsByClassName('toggle-icon');
          if (toggleIcon.item && toggleIcon.item(0) &&
            toggleIcon.item(0).classList.contains('ft-toggle-right')) {
            callapseOrExpanded = 'menu-expanded';
          } else {
            callapseOrExpanded = 'menu-collapsed';
          }
        }

        // callapseOrExpanded = callapseOrExpanded !== '' ? callapseOrExpanded : 'menu-collapsed';
        currentBodyClassList = ['vertical-layout', 'vertical-menu-modern', '2-columns', 'pace-done', 'menu-close', callapseOrExpanded];

        if (this._themeSettingsConfig.layout.pattern === 'fixed') {
          currentBodyClassList.push('fixed-navbar');
        }

        if (this._themeSettingsConfig.layout.pattern === '') {
          currentBodyClassList.push('fixed-navbar');
        }

        if (this._themeSettingsConfig.layout.pattern === 'boxed') {
          this.renderer.addClass(document.body, 'boxed-layout');
          this.renderer.addClass(document.body, 'container');
          this.renderer.addClass(document.body, 'fixed-navbar');
        }

      } else {
        currentBodyClassList = ['horizontal-layout', '2-columns', 'horizontal-menu'];
        if (window.innerWidth >= AppConstants.MOBILE_RESPONSIVE_WIDTH) {
          currentBodyClassList.push('menu-expanded');
        } else {
          currentBodyClassList.push('menu-collapsed');
        }

        if (this._themeSettingsConfig.layout.pattern === 'boxed') {
          this.renderer.addClass(document.body, 'boxed-layout');
          this.renderer.addClass(document.body, 'container');
        }
      }
    }
    const footer = document.getElementById('footer');
    // if (this.router.url == '/chats') {
    // const footer = document.getElementById('footer');
    if (this.router.url === '/chats' || this.router.url === '/chats/static-chat') {
      currentBodyClassList.push('chat-application');
      // footer.classList.add('fixed-bottom');
    } else if (currentBodyClassList.includes('fixed-bottom')) {
      currentBodyClassList.push('chat-application');
      currentBodyClassList = currentBodyClassList.filter(item => item !== 'fixed-bottom');
      footer.classList.remove('fixed-bottom');
    }

    if (this.router.url === '/email') {
      currentBodyClassList.push('email-application');
      // footer.classList.add('fixed-bottom');
    } else if (currentBodyClassList.includes('fixed-bottom')) {
      currentBodyClassList.push('email-application');
      currentBodyClassList = currentBodyClassList.filter(item => item !== 'fixed-bottom');
      footer.classList.remove('fixed-bottom');
    }

    if (this.router.url === '/contacts') {
      currentBodyClassList.push('app-contacts');
    }
    if (this.router.url === '/todos') {
      currentBodyClassList.push('todo');
    }
    if (this.router.url === '/todo-app') {
      currentBodyClassList.push('todo-application');
    }

    currentBodyClassList.forEach(function (c) {
      _self.renderer.addClass(document.body, c);
    });
    this.handleFullScreen();
  }

  handleFullScreen() {
    const toggleIcon = document.getElementsByClassName('ficon');
    if (window.innerWidth === screen.width && window.innerHeight === screen.height && toggleIcon.item(0)) {
      this.renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
      this.renderer.addClass(toggleIcon.item(0), 'ft-minimize');
    } else if (toggleIcon.item(0)) {
      this.renderer.addClass(toggleIcon.item(0), 'ft-maximize');
      this.renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
    }
  }

  handleCollapsibleMenu() {
    if (this._themeSettingsConfig.menu === 'collapse') {
      // show the left aside menu
      this.navbarService.setFixedMenu(false);
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
    } else {
      this.navbarService.setFixedMenu(true);
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const menuClose = document.body.getElementsByClassName('menu-close');
    const toggle = document.getElementsByClassName('content-overlay');
    const sidenavOverlay = document.getElementsByClassName('sidenav-overlay');
    const emailMenu = document.getElementsByClassName('email-app-menu');
    const toggleIcon = document.getElementById('sidebar-left');

    if (event.target.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.handleBody(true);
      if (menuClose) {
        this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
        this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
      }
    } else {
      this.handleBody(false);
    }
    if (toggle && (this.router.url === '/chats' || this.router.url === '/static-chat' ||
    this.router.url === '/todos' || this.router.url === '/contacts') &&
      event.target.innerWidth > AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.renderer.removeClass(toggle.item(0), 'show');
      this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
      this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
      this.renderer.removeClass(toggleIcon, 'show');
    }
    if ((toggle || sidenavOverlay) && this.router.url === '/email' && event.target.innerWidth > 767) {
      this.renderer.removeClass(toggle.item(0), 'show');
      this.renderer.removeClass(emailMenu.item(0), 'show');
      this.renderer.removeClass(sidenavOverlay.item(0), 'd-block');
      this.renderer.addClass(sidenavOverlay.item(0), 'd-none');
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
