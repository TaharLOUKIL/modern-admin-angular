import {
  Component,
  OnInit,
  Inject,
  Renderer2,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavbarService } from '../../../_services/navbar.service';
import { ThemeSettingsService } from '../../settings/theme-settings.service';
import { MenuSettingsService } from '../../settings/menu-settings.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent,
  PerfectScrollbarDirective,
} from 'ngx-perfect-scrollbar';
import { AppConstants } from 'src/app/_helpers/app.constants';

const docElmWithBrowsersFullScreenFunctions =
  document.documentElement as HTMLElement & {
    mozRequestFullScreen(): Promise<void>;
    webkitRequestFullscreen(): Promise<void>;
    msRequestFullscreen(): Promise<void>;
  };

const docWithBrowsersExitFunctions = document as Document & {
  mozCancelFullScreen(): Promise<void>;
  webkitExitFullscreen(): Promise<void>;
  msExitFullscreen(): Promise<void>;
};
@Component({
  selector: 'app-header-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.css'],
})
export class VerticalComponent implements OnInit, AfterViewInit {
  insideTm: any;
  outsideTm: any;
  private _unsubscribeAll: Subject<any>;
  private _unsubscribeAllMenu: Subject<any>;
  public _themeSettingsConfig: any;
  private _menuSettingsConfig: any;
  public selectedHeaderNavBarClass: string;
  public selectedNavBarHeaderClass: string;
  public currentUser: any;
  public isHeaderSearchOpen: any;
  isMobile = false;
  showNavbar = false;
  public maximize: any;
  public search: any;
  public internationalization: any;
  public notification: any;
  public email: any;
  public config: PerfectScrollbarConfigInterface = { wheelPropagation: false };
  @ViewChild(PerfectScrollbarComponent)
  componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true })
  directiveRef?: PerfectScrollbarDirective;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _renderer: Renderer2,
    private navbarService: NavbarService,
    private _themeSettingsService: ThemeSettingsService,
    private _menuSettingsService: MenuSettingsService,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this._unsubscribeAll = new Subject();
    this._unsubscribeAllMenu = new Subject();
  }

  ngOnInit() {
    this.isMobile = window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH;
    if (!this.isMobile) {
      this.showNavbar = true;
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    // Subscribe to config changes
    this._themeSettingsService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this._themeSettingsConfig = config;
        this.refreshView();
      });
    this._menuSettingsService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this._menuSettingsConfig = config;
      });
    this.maximize = this._themeSettingsConfig.headerIcons.maximize;
    this.search = this._themeSettingsConfig.headerIcons.search;
    this.internationalization =
      this._themeSettingsConfig.headerIcons.internationalization;
    this.notification = this._themeSettingsConfig.headerIcons.notification;
    this.email = this._themeSettingsConfig.headerIcons.email;
  }

  ngAfterViewInit(): void {
    this.refreshView();
  }

  refreshView() {
    const iconElement = document.getElementsByClassName('toggle-icon');
    const menuColorElement = document.getElementsByClassName('main-menu');
    const navigationElement = document.getElementsByClassName('main-menu');
    const navbarElement = document.getElementsByClassName('header-navbar');
    const themeColorElement = document.getElementsByClassName('header-navbar');
    const element = document.getElementsByClassName('navbar-header');
    const boxelement = document.getElementById('customizer');
    if (iconElement) {
      if (
        this._themeSettingsConfig.colorTheme === 'semi-light' ||
        this._themeSettingsConfig.colorTheme === 'light'
      ) {
        this._renderer.removeClass(iconElement.item(0), 'white');
        this._renderer.addClass(iconElement.item(0), 'blue-grey');
        this._renderer.addClass(iconElement.item(0), 'darken-3');
      } else if (
        this._themeSettingsConfig.colorTheme === 'semi-dark' ||
        this._themeSettingsConfig.colorTheme === 'dark'
      ) {
        this._renderer.addClass(iconElement.item(0), 'white');
        this._renderer.removeClass(iconElement.item(0), 'blue-grey');
        this._renderer.removeClass(iconElement.item(0), 'darken-3');
      }
    }

    if (this._themeSettingsConfig.colorTheme === 'semi-light') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
      this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
      this.selectedHeaderNavBarClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'dark') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = '';
    } else if (this._themeSettingsConfig.colorTheme === 'light') {
      this.selectedHeaderNavBarClass = this._themeSettingsConfig.color;
      this.selectedNavBarHeaderClass = this._themeSettingsConfig.color;
    }
    if (menuColorElement) {
      if (this._themeSettingsConfig.menuColor === 'menu-dark') {
        this._renderer.removeClass(menuColorElement.item(0), 'menu-light');
        this._renderer.addClass(menuColorElement.item(0), 'menu-dark');
      } else if (this._themeSettingsConfig.menuColor === 'menu-light') {
        this._renderer.removeClass(menuColorElement.item(0), 'menu-dark');
        this._renderer.addClass(menuColorElement.item(0), 'menu-light');
      }
    }

    if (themeColorElement) {
      if (this._themeSettingsConfig.colorTheme === 'semi-light') {
        this._renderer.removeClass(
          themeColorElement.item(0),
          'navbar-semi-dark'
        );
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'semi-dark') {
        this._renderer.removeClass(
          themeColorElement.item(0),
          'navbar-semi-light'
        );
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.removeClass(
          themeColorElement.item(0),
          'navbar-semi-dark'
        );
        this._renderer.removeClass(
          themeColorElement.item(0),
          'navbar-semi-dark'
        );
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-light');
      } else if (this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(
          themeColorElement.item(0),
          'navbar-semi-dark'
        );
        this._renderer.removeClass(themeColorElement.item(0), 'navbar-dark');
        this._renderer.removeClass(
          themeColorElement.item(0),
          'navbar-semi-light'
        );
      }
    }

    if (navigationElement) {
      if (this._themeSettingsConfig.navigation === 'menu-native-scroll') {
        this._renderer.addClass(
          navigationElement.item(0),
          'menu-native-scroll'
        );
      } else if (this._themeSettingsConfig.navigation === 'menu-icon-right') {
        this._renderer.addClass(navigationElement.item(0), 'menu-icon-right');
      } else if (this._themeSettingsConfig.navigation === 'menu-bordered') {
        this._renderer.addClass(navigationElement.item(0), 'menu-bordered');
      } else if (this._themeSettingsConfig.navigation === 'menu-flipped') {
        this._renderer.addClass(document.body, 'menu-flipped');
      } else if (this._themeSettingsConfig.navigation === 'menu-collapsible') {
        this._renderer.addClass(navigationElement.item(0), 'menu-collapsible');
      } else if (this._themeSettingsConfig.navigation === 'menu-static') {
        this._renderer.addClass(navigationElement.item(0), 'menu-static');
      }
    }

    if (navbarElement) {
      if (this._themeSettingsConfig.menu === 'navbar-static-top') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-static-top');
        this._renderer.addClass(navigationElement.item(0), 'menu-static');
      }
    }

    if (navbarElement) {
      if (this._themeSettingsConfig.menu === 'semi-light') {
        this._renderer.addClass(
          navbarElement.item(0),
          'navbar-semi-light bg-gradient-x-grey-blue'
        );
      } else if (this._themeSettingsConfig.menu === 'semi-dark') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-semi-dark');
      } else if (this._themeSettingsConfig.menu === 'dark') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-dark');
      } else if (this._themeSettingsConfig.menu === 'light') {
        this._renderer.addClass(navbarElement.item(0), 'navbar-light');
      }
    }
  }

  resetOpenMenu() {
    for (
      let i = 0;
      i < this._menuSettingsConfig.vertical_menu.items.length;
      i++
    ) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu) {
        menu['isOpen'] = false;
        menu['isActive'] = false;
        menu['hover'] = false;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          menu['isOpen'] = false;
          menu['isActive'] = false;
          menu['hover'] = false;
          menu.submenu.items[j]['isOpen'] = false;
        }
      }
    }
  }

  setOpenInNavbar(value) {
    for (
      let i = 0;
      i < this._menuSettingsConfig.vertical_menu.items.length;
      i++
    ) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu && menu.page === this.router.url) {
        menu['isOpen'] = value;
        menu['isActive'] = value;
      } else if (menu.submenu) {
        for (let j = 0; j < menu.submenu.items.length; j++) {
          if (menu.submenu.items[j].page === this.router.url) {
            menu['isOpen'] = value;
            menu['isActive'] = value;
            menu.submenu.items[j]['isOpen'] = value;
            menu.submenu.items[j]['isActive'] = value;
            break;
          }
        }
      }
    }
  }

  /**
   * Use for fixed left aside menu, to show menu on mouseenter event.
   * @param e Event
   */
  mouseEnter(e) {
    if (this.navbarService.isFixedMenu()) {
      return;
    }
    this.navbarService.setMouseInRegion(true);
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');

    // check if the left aside menu is fixed
    if (!navBar.classList.contains('expanded')) {
      this._renderer.addClass(navBar, 'expanded');
      this._renderer.addClass(mainMenu, 'expanded');
      this.resetOpenMenu();
      this.setOpenInNavbar(true);
    }
  }

  /**
   * Use for fixed left aside menu, to show menu on mouseenter event.
   * @param e Event
   */
  mouseLeave(event) {
    if (this.navbarService.isFixedMenu()) {
      return;
    }
    const _self = this;
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    if (navBar && navBar.classList.contains('expanded')) {
      this.insideTm = setTimeout(() => {
        if (!_self.navbarService.isMouseInRegion()) {
          this._renderer.removeClass(navBar, 'expanded');
          this._renderer.removeClass(mainMenu, 'expanded');
          this.resetOpenMenu();
          this.setOpenInNavbar(false);
        }
      }, 100);
    }
    this.navbarService.setMouseInRegion(false);
  }

  // example to update badge value dynamically from another component
  updateMenuBadgeValue() {
    for (let i = 0; i < this._menuSettingsConfig.items.length; i++) {
      if (this._menuSettingsConfig.items[i].badge) {
        this._menuSettingsConfig.items[i].badge.value = 19;
      }
    }
    this._menuSettingsService.config = this._menuSettingsConfig;
  }

  handleCollapseOfMenu(element) {
    if (
      element.classList &&
      element.classList.contains('has-sub') &&
      element.classList.contains('open')
    ) {
      element.classList.remove('open');
      element.classList.remove('hover');
      element.classList.add('menu-collapsed-open');
    }
  }

  handleExpandOfMenu(element) {
    if (
      element.classList &&
      element.classList.contains('has-sub') &&
      element.classList.contains('menu-collapsed-open')
    ) {
      element.classList.remove('menu-collapsed-open');
      element.classList.add('open');
      element.classList.add('hover');
    }
  }

  toggleMenu(event) {
    const target = event.target || event.srcElement || event.currentTarget;
    const parent = target.parentElement;
    if (parent && parent.classList.contains('has-sub')) {
      this.openSubMenuUsingParent(parent);
    } else {
      const parentOfParent = parent.parentElement;
      this.openSubMenuUsingParent(parentOfParent);
    }
  }

  openSubMenuUsingParent(parent) {
    if (
      parent.classList &&
      parent.classList.contains('has-sub') &&
      !parent.classList.contains('open')
    ) {
      parent.classList.add('open');
    } else if (
      parent.classList &&
      parent.classList.contains('has-sub') &&
      parent.classList.contains('open')
    ) {
      parent.classList.remove('open');
    }
  }

  toggleFullScreen() {
    const toggleIcon = document.getElementsByClassName('ficon');

    if (toggleIcon.item(0).classList.contains('ft-maximize')) {
      this.openfullscreen();
      this._renderer.removeClass(toggleIcon.item(0), 'ft-maximize');
      this._renderer.addClass(toggleIcon.item(0), 'ft-minimize');
    } else if (toggleIcon.item(0).classList.contains('ft-minimize')) {
      this.closefullscreen();
      this._renderer.addClass(toggleIcon.item(0), 'ft-maximize');
      this._renderer.removeClass(toggleIcon.item(0), 'ft-minimize');
    }
  }

  openfullscreen() {
    // Trigger fullscreen
    // eslint-disable-next-line no-shadow,@typescript-eslint/no-shadow
    const docElmWithBrowsersFullScreenFunctions =
      document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };

    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) {
      /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) {
      /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  }

  closefullscreen() {
    // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
    const docWithBrowsersExitFunctions = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) {
      /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) {
      /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
  }

  toggleFixMenu(e) {
    if (this.document.body.classList.contains('menu-expanded')) {
      // show the left aside menu
      this.navbarService.setFixedMenu(false);
      this.document.body.classList.remove('menu-expanded');
      this.document.body.classList.add('menu-collapsed');
      // Change switch icon
      this._themeSettingsConfig.menu = 'collapse';
    } else {
      this.navbarService.setFixedMenu(true);
      this.document.body.classList.remove('menu-collapsed');
      this.document.body.classList.add('menu-expanded');
      // Change switch icon
      this._themeSettingsConfig.menu = 'expand';
    }
    const navBar = this.document.getElementById('navbar-header');
    const mainMenu = this.document.getElementById('main-menu');
    this._renderer.addClass(navBar, 'expanded');
    this._renderer.addClass(mainMenu, 'expanded');
    setTimeout(() => {
      AppConstants.fireRefreshEventOnWindow();
    }, 300);
  }

  toggleNavigation(e) {
    const sidenav = document.getElementById('sidenav-overlay');
    const sidebarLeft =
      document.getElementById('sidebar-left') ||
      document.getElementById('email-app-menu') ||
      document.getElementById('sidebar-todo');
    const contentOverlay = document.getElementById('content-overlay');

    if (
      this.document.body.classList.contains('menu-open') &&
      (this.router.url === '/todos' ||
        this.router.url === '/contacts' ||
        this.router.url === '/email' ||
        this.router.url === '/chats' ||
        this.router.url === '/chats/static-chat')
    ) {
      this.document.body.classList.remove('menu-open');
      this._renderer.removeClass(sidenav, 'd-block');
      this._renderer.removeClass(contentOverlay, 'show');
      this.document.body.classList.add('menu-close');
      this._renderer.addClass(sidenav, 'd-none');
      this.showNavbar = false;
    } else if (this.document.body.classList.contains('menu-open')) {
      this.document.body.classList.remove('menu-open');
      this._renderer.removeClass(sidenav, 'd-block');
      this.document.body.classList.add('menu-close');
      this._renderer.addClass(sidenav, 'd-none');
      this.showNavbar = false;
    } else {
      this._renderer.removeClass(sidenav, 'd-none');
      this.document.body.classList.remove('menu-close');
      this.document.body.classList.add('menu-open');
      this._renderer.addClass(sidenav, 'd-block');
      this.showNavbar = false;
    }

    if (sidebarLeft) {
      this._renderer.removeClass(sidebarLeft, 'show');
    }
    if (contentOverlay) {
      this._renderer.removeClass(contentOverlay, 'show');
    }
  }

  toggleNavbar(e) {
    if (this.showNavbar) {
      this.showNavbar = false;
    } else {
      this.showNavbar = true;
    }
  }

  public clickSearch() {
    if (this.isHeaderSearchOpen) {
      this.isHeaderSearchOpen = false;
    } else {
      this.isHeaderSearchOpen = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.isMobile = true;
      this.showNavbar = false;
    } else {
      this.isMobile = false;
      this.showNavbar = true;
    }
  }
}
