import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import * as _ from 'lodash';

export const MENU_SETTINGS_CONFIG = new InjectionToken('menuCustomConfig');

@Injectable({
  providedIn: 'root'
})
export class MenuSettingsService {

  private _configSubject: BehaviorSubject<any>;
  private readonly _defaultConfig: any;

  constructor(private _router: Router, @Inject(MENU_SETTINGS_CONFIG) private _config) {
    // Set the default config from the user provided config (from forRoot)
    this._defaultConfig = _config;

    // Initialize the service
    this._init();
  }

  private _init(): void {
    // Set the config from the default config
    this._configSubject = new BehaviorSubject(_.cloneDeep(this._defaultConfig));

    // Reload the default layout config on every RoutesRecognized event
    // if the current layout config is different from the default one
    this._router.events
      .pipe(filter(event => event instanceof RoutesRecognized))
      .subscribe(() => {
        if (!_.isEqual(this._configSubject.getValue().layout, this._defaultConfig.layout)) {
          // Clone the current config
          const config = _.cloneDeep(this._configSubject.getValue());

          // Set the config
          this._configSubject.next(config);
        }
      });
  }

  set config(value) {
    // Get the value from the behavior subject
    let config = this._configSubject.getValue();

    // Merge the new config
    config = _.merge({}, config, value);

    // Notify the observers
    this._configSubject.next(config);
  }

  get config(): any | Observable<any> {
    return this._configSubject.asObservable();
  }

}
