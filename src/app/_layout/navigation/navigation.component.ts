import { Component, OnInit, HostListener } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

import { ThemeSettingsService } from '../settings/theme-settings.service';
import { Subject } from 'rxjs';
import { AppConstants } from 'src/app/_helpers/app.constants';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  layout: string;
  private _themeSettingsConfig: any;
  private _unsubscribeAll: Subject<any>;
  isMobile = false;
  constructor(private _themeSettingsService: ThemeSettingsService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    const self = this;
    this.isMobile = window.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL;
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
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < AppConstants.MOBILE_RESPONSIVE_WIDTH_HORIZONTAL) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }
}
