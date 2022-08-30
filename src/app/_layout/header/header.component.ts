import { Component, OnInit, Renderer2, AfterViewInit, HostListener, Inject } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { ThemeSettingsService } from '../settings/theme-settings.service';
import { Subject } from 'rxjs';
import { AppConstants } from '../../_helpers/app.constants';
import { DeviceDetectorService } from 'ngx-device-detector';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  layout: string;
  private _themeSettingsConfig: any;
  private _unsubscribeAll: Subject<any>;
  private isMobile = false;
  public selectedColorClass = '';

  constructor(private _renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private _themeSettingsService: ThemeSettingsService,
    private deviceService: DeviceDetectorService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    const self = this;

    // Subscribe to config changes
    this._themeSettingsService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this._themeSettingsConfig = config;
        if (config.layout && config.layout.style &&
          config.layout.style === 'vertical') {
          self.layout = 'vertical';
        } else {
          self.layout = 'horizontal';
        }
        this.refreshView();
      });
  }

  refreshView() {
    const self = this;

    const headerElement = document.getElementsByClassName('header-navbar');
    if (headerElement.item(0)) {
      let currentHeaderClassList = [];
      const navbar = this.document.getElementById('navbar-mobile');
      // Layout
      if (self._themeSettingsConfig.layout.style === 'horizontal') {
        currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu',
         'navbar-without-dd-arrow', 'navbar-static-top'];
         const topHeaderElement = document.getElementById('top-header');
        if (window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
          currentHeaderClassList.push('fixed-top');
          this._renderer.removeClass(topHeaderElement, 'navbar-brand-center');
          navbar.classList.remove('show');
        } else {
            currentHeaderClassList.push('navbar-brand-center');
            this._renderer.removeClass(topHeaderElement, 'fixed-top');
            navbar.classList.add('show');
        }
      } else {
        currentHeaderClassList = ['header-navbar', 'navbar-expand-md', 'navbar', 'navbar-with-menu', 'navbar-without-dd-arrow', 'fixed-top',
          'navbar-shadow'];

        if (self._themeSettingsConfig.colorTheme === 'semi-light' && self._themeSettingsConfig.layout.style === 'vertical') {
          if (self._themeSettingsConfig.layout.style === 'vertical') {
            // currentHeaderClassList.push('bg-info');
          }
          self._renderer.addClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-light');
        } else if (self._themeSettingsConfig.colorTheme === 'semi-dark' && self._themeSettingsConfig.layout.style === 'vertical') {
          self._renderer.addClass(headerElement.item(0), 'navbar-semi-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
          // self._renderer.removeClass(headerElement.item(0), 'bg-info');
        } else if (self._themeSettingsConfig.colorTheme === 'dark' && self._themeSettingsConfig.layout.style === 'vertical') {
          self._renderer.addClass(headerElement.item(0), 'navbar-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
          // self._renderer.removeClass(headerElement.item(0), 'bg-info');
        } else if (self._themeSettingsConfig.colorTheme === 'light' && self._themeSettingsConfig.layout.style === 'vertical') {
          self._renderer.addClass(headerElement.item(0), 'navbar-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-light');
          self._renderer.removeClass(headerElement.item(0), 'navbar-semi-dark');
          self._renderer.removeClass(headerElement.item(0), 'navbar-dark');
          // self._renderer.removeClass(headerElement.item(0), 'bg-info');
        }
      }



      currentHeaderClassList.forEach(function (c) {
        self._renderer.addClass(headerElement.item(0), c);
      });


    }
  }

  ngAfterViewInit() {
    this.refreshView();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
    this.refreshView();
  }

}
