import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
  HammerGestureConfig,
} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbModule,
  NgbCarouselConfig,
  NgbModalConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Routing
import { routing } from './app.routing';
// Components
import { AppComponent } from './app.component';
import { SettingsModule } from './_layout/settings/settings.module';
import { ThemeSettingsConfig } from './_layout/settings/theme-settings.config';
import { MenuSettingsConfig } from './_layout/settings/menu-settings.config';
import { HeaderComponent } from './_layout/header/header.component';
import { VerticalComponent as HeaderVerticalComponent } from './_layout/header/vertical/vertical.component';
import { FullLayoutNavbarComponent } from './_layout/header/full-layout-navbar/full-layout-navbar.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { NavigationComponent as AppNavigationComponent } from './_layout/navigation/navigation.component';
import { PrivateLayoutComponent } from './_layout/private-layout/private-layout.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { NavbarService } from './_services/navbar.service';
import { VerticalnavComponent } from './_layout/navigation/verticalnav/verticalnav.component';
// perfect scroll bar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// spinner
import { DeviceDetectorModule } from 'ngx-device-detector';
import { RouterModule } from '@angular/router';
import { BreadcrumbModule } from './_layout/breadcrumb/breadcrumb.module';
import { BlockTemplateComponent } from './_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { FullLayoutComponent } from './_layout/full-layout/full-layout.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BreadcrumbModule,
    NgbModule,
    FormsModule,
    routing,
    // Settings modules
    SettingsModule.forRoot(ThemeSettingsConfig, MenuSettingsConfig),
    PerfectScrollbarModule,
    DeviceDetectorModule.forRoot(),
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
    }),
  ],
  declarations: [
    AppComponent,
    PrivateLayoutComponent,
    HeaderComponent,
    FullLayoutNavbarComponent,
    HeaderVerticalComponent,
    FooterComponent,
    AppNavigationComponent,
    // AlertComponent,
    ChangelogComponent,
    VerticalnavComponent,
    BlockTemplateComponent,

    FullLayoutComponent,
  ],
  providers: [
    NavbarService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    },
    NgbCarouselConfig,
    NgbModalConfig,
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
