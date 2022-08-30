import { Component, Inject, OnInit, Renderer2, NgZone, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavbarService } from '../../../_services/navbar.service';
import { ThemeSettingsService } from '../../settings/theme-settings.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PerfectScrollbarConfigInterface, PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { MenuSettingsService } from '../../settings/menu-settings.service';
import { isArray } from 'util';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AppConstants } from 'src/app/_helpers/app.constants';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({

  selector: 'app-verticalnav',
  templateUrl: './verticalnav.component.html',
  styleUrls: ['./verticalnav.component.css'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: '1',
      })),
      state('hide', style({
        opacity: '0',
        height: '*',
      })),
      transition('show => hide', animate('200ms ease-in-out')),
      transition('hide => show', animate('200ms ease-in-out'))
    ])
  ]
})
export class VerticalnavComponent implements OnInit {
  child: any;
  insideTm: any;
  outsideTm: any;
  loggedInUser: any;
  public title;
  private _themeSettingsConfig: any;
  public _menuSettingsConfig: any;
  private _unsubscribeAll: Subject<any>;
  private _unsubscribeAllMenu: Subject<any>;

  public config: PerfectScrollbarConfigInterface = { wheelPropagation: false };

  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective, { static: true }) directiveRef?: PerfectScrollbarDirective;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private navbarService: NavbarService,
    private _themeSettingsService: ThemeSettingsService,
    private _menuSettingsService: MenuSettingsService,
    private _renderer: Renderer2,
    private router: Router
  ) {
    this._unsubscribeAll = new Subject();
    this._unsubscribeAllMenu = new Subject();
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.resetMainMenu();
        this.setActiveRouteInNavbar();
      }
    });
  }
  ngOnInit() {

    // Subscribe to config changes
    this._themeSettingsService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this._themeSettingsConfig = config;
        this.refreshView();
      });
    this._menuSettingsService.config
      .pipe(takeUntil(this._unsubscribeAllMenu))
      .subscribe((config) => {
        this._menuSettingsConfig = config;
      });
    // TODO Patch to reset menu after login
    this.resetMainMenu();
    this.setActiveRouteInNavbar();
  }

  resetMainMenu() {
    const nodes = this.document.getElementById('main-menu-navigation').childNodes;
    for (let i = 0; i < nodes.length; i++) {
      this.resetCollapseMenu(nodes[i]);
    }
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
      this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
      this._menuSettingsConfig.vertical_menu.items[i]['isOpen'] = false;
      this.resetSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i]);
    }
  }

  resetCollapseMenu(element) {
    if (element.classList && element.classList.contains('has-sub') && element.classList.contains('open')) {
      element.classList.remove('hover');
      element.classList.remove('menu-collapsed-open');
    }
  }

  resetSubmenuItems(parentItem) {
    if (parentItem['submenu'] &&
      parentItem['submenu']['items'] &&
      parentItem['submenu']['items'].length > 0) {
      parentItem['isOpen'] = false;
      for (let j = 0; j < parentItem['submenu']['items'].length; j++) {
        parentItem['submenu']['items'][j]['isSelected'] = false;
        this.resetSubmenuItems(parentItem['submenu']['items'][j]);
      }
    }
  }

  refreshView() {
    const mainMenuElement = document.getElementsByClassName('main-menu');
    if (mainMenuElement && mainMenuElement.length > 0) {
      if (this._themeSettingsConfig.colorTheme === 'semi-light' || this._themeSettingsConfig.colorTheme === 'light') {
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-dark');
        this._renderer.addClass(mainMenuElement.item(0), 'menu-light');
      } else if (this._themeSettingsConfig.colorTheme === 'semi-dark' || this._themeSettingsConfig.colorTheme === 'dark') {
        this._renderer.addClass(mainMenuElement.item(0), 'menu-dark');
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-light');
      }
      if (this._themeSettingsConfig.layout.pattern === 'static') {
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-fixed');
        this._renderer.addClass(mainMenuElement.item(0), 'menu-static');
      } else if (this._themeSettingsConfig.layout.pattern === 'fixed') {
        this._renderer.removeClass(mainMenuElement.item(0), 'menu-static');
        this._renderer.addClass(mainMenuElement.item(0), 'menu-fixed');
      }
    }
  }

  setActiveRouteInNavbar() {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      if (!this._menuSettingsConfig.vertical_menu.items[i].submenu &&
        this._menuSettingsConfig.vertical_menu.items[i].page === this.router.url) {
        this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
        break;
      } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu) {
        // Level 1 menu
        for (let j = 0; j < this._menuSettingsConfig.vertical_menu.items[i].submenu.items.length; j++) {
          if (!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu &&
            this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page === this.router.url) {
            this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
            this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
            this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
            break;
          } else if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu) {
            // Level 2 menu
            for (let k = 0; k < this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items.length; k++) {
              if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k].page === this.router.url) {
                this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;

                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu.items[k]['isSelected'] = true;
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].isOpen = true;
              }
            }
          } else if(!this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].submenu ){
           let a,b;
           let URL =  localStorage.getItem('creatorurl');
           let SurveyUrl =  localStorage.getItem('surveyurl');
           if( this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page ==='/creator' && this.router.url === URL){
               a = j;
              this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].submenu.items[a]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
              // this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j]['isSelected'] = false;
            } else if(this._menuSettingsConfig.vertical_menu.items[i].submenu.items[j].page ==='/survey' && this.router.url === SurveyUrl){
                 b = j;
              this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].submenu.items[b]['isSelected'] = true;
              this._menuSettingsConfig.vertical_menu.items[i].isOpen = true;
              if (this._menuSettingsConfig.vertical_menu.items[i].submenu.items[a]) {
                this._menuSettingsConfig.vertical_menu.items[i].submenu.items[a]['isSelected'] = false;
              }
          }
        }
        }
      }
    }
  }

  resetOpenMenu() {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
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
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      const menu = this._menuSettingsConfig.vertical_menu.items[i];
      if (!menu.submenu &&
        menu.page === this.router.url) {
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

  callFunction(event, child, isSubmenuOfSubmenu) {
    const methodName = event.methodName;
    if (this[methodName]) {
      // method exists on the component
      const param = event.methodParam;
      if (!isArray(param)) {
        this[methodName](param); // call it
      } else {
        this[methodName](param[0], param[1]); // call it
      }
    }
    this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
    child['isSelected'] = true;
  }

  setTheme(theme) {
    this._themeSettingsService.config = {
      colorTheme: theme, // semi-light, semi-dark
    };
  }

  setLayout(layout) {
    this._themeSettingsService.config = {
      layout: {
        pattern: layout
      }
    };
  }

  fixComponent(component, value) {
    if (component === 'header') {
      this._themeSettingsService.config = {
        header: value
      };
    } else if (component === 'footer') {
      this._themeSettingsService.config = {
        footer: value
      };
    } else {
      this._themeSettingsService.config = {
        header: value,
        footer: value
      };
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

  resetOtherActiveMenu(selectedChild, isSubmenuOfSubmenu) {
    for (let i = 0; i < this._menuSettingsConfig.vertical_menu.items.length; i++) {
      this._menuSettingsConfig.vertical_menu.items[i]['isSelected'] = false;
      this._menuSettingsConfig.vertical_menu.items[i]['hover'] = false;
      this.handleSubmenuItems(this._menuSettingsConfig.vertical_menu.items[i], selectedChild, isSubmenuOfSubmenu);
    }
  }

  handleSubmenuItems(parentItem, selectedChild, isSubmenuOfSubmenu) {
    if (selectedChild['title'] === 'Horizontal') {
      localStorage.setItem('currentLayoutStyle', AppConstants.LAYOUT_STYLE_HORIZONTAL);
      window.location.reload();
    } else if (selectedChild['title'] === 'Vertical') {
      localStorage.setItem('currentLayoutStyle', AppConstants.LAYOUT_STYLE_VERTICAL);
      window.location.reload();
    } else if (parentItem['submenu'] &&
      parentItem['submenu']['items'] &&
      parentItem['submenu']['items'].length > 0) {
      if (parentItem.title !== selectedChild.title && parentItem['isOpen'] === true && !isSubmenuOfSubmenu &&
        this._themeSettingsConfig.navigation === AppConstants.NAVIGATION_TYPE_COLLAPSIBLE) {
        parentItem['isOpen'] = false;
      }
      for (let j = 0; j < parentItem['submenu']['items'].length; j++) {
        if (selectedChild.page !== 'null') {
          parentItem['submenu']['items'][j]['isSelected'] = false;
        }
        this.handleSubmenuItems(parentItem['submenu']['items'][j], selectedChild, isSubmenuOfSubmenu);
      }
    } else if (parentItem.title !== selectedChild.title && !selectedChild.submenu
      && this._themeSettingsConfig.navigation === AppConstants.NAVIGATION_TYPE_COLLAPSIBLE
      && parentItem['isOpen'] === true) {
      parentItem['isOpen'] = false;
    }
  }
  toggleMenu(event, child, isSubmenuOfSubmenu) {
    const toggle = document.getElementById('sidenav-overlay');
    this.resetOtherActiveMenu(child, isSubmenuOfSubmenu);
    this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    if (child['isSelected'] === true) {
      child['isSelected'] = false;
    } else {
      child['isSelected'] = true;
    }

    if (child['hover'] === true) {
      child['hover'] = false;
    } else {
      child['hover'] = true;
    }

    if (child['isOpen'] === true) {
      child['isOpen'] = false;
    } else {
      child['isOpen'] = true;
    }

    if (this.router.url !== '') {
      this._renderer.addClass(toggle, 'd-none');
      this._renderer.removeClass(toggle, 'd-block');
    }

    if ( child.page === '/chats' && this.loggedInUser.email === 'john@pixinvent.com') {
      this.router.navigate(['/chats/static-chat']);
    } else if ( child.page === '/chats' && this.loggedInUser.email !== 'john@pixinvent.com') {
      this.router.navigate(['/chats']);
    }
   
  }
}
