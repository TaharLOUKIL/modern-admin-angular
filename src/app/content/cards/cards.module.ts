import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CardModule } from '../partials/general/card/card.module';
import { BreadcrumbModule } from 'src/app/_layout/breadcrumb/breadcrumb.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockTemplateComponent } from 'src/app/_layout/blockui/block-template.component';
import { BlockUIModule } from 'ng-block-ui';
import { MatchHeightModule } from '../partials/general/match-height/match-height.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    NgbModule,
    MatchHeightModule,
    BreadcrumbModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    RouterModule.forChild([{
        path: 'bootstrap',
        component: BootstrapComponent
      },
    ])
  ],
  declarations: [BootstrapComponent],
  exports: [RouterModule]
})
export class CardsModule { }
