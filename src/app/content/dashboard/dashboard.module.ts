import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlockUIModule } from 'ng-block-ui';
import { BlockTemplateComponent } from '../../_layout/blockui/block-template.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HomaPageComponent } from './homa-page/homa-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BotsComponent } from './bots/bots.component';
import { TextComponent } from './text/text.component';
import { LocationComponent } from './Location/Location.component';
import { ImageComponent } from './image/image.component';
import { VideoComponent } from './video/video.component';
import { AudioComponent } from './audio/audio.component';
import { FileComponent } from './file/file.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ClipboardModule } from '@angular/cdk/clipboard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClipboardModule,
    FormsModule,
    NgxDatatableModule,
    PerfectScrollbarModule,
    NgbModule,
    NgSelectModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({
      template: BlockTemplateComponent,
    }),
    RouterModule.forChild([
      {
        path: '',
        component: BotsComponent,
      },
      {
        path: 'bot/:id',
        component: HomaPageComponent,
      },
      {
        path: 'content/Text',
        component: TextComponent,
      },
      {
        path: 'content/Location',
        component: LocationComponent,
      },
      {
        path: 'content/Image',
        component: ImageComponent,
      },
      {
        path: 'content/Video',
        component: VideoComponent,
      },
      {
        path: 'content/Audio',
        component: AudioComponent,
      },
      {
        path: 'content/File',
        component: FileComponent,
      },
    ]),
  ],
  declarations: [
    HomaPageComponent,
    BotsComponent,
    TextComponent,
    LocationComponent,
    ImageComponent,
    VideoComponent,
    AudioComponent,
    FileComponent,
  ],

  exports: [RouterModule],
})
export class DashboardModule {}
