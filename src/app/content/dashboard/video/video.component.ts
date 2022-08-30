import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';
import { VideoService } from '../services/video.service';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent implements OnInit {
  progress: number;
  message: string;
  files;
  isAdded: boolean;
  rows: Video[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Video = {
    _id: '',
    createdAt: new Date(),
    modifiedAt: new Date(),
    Titre: '',
    url: '',
    type: '',
  };
  isSuccessAdded = false;
  isSuccessModified = false;
  isSuccessDeleted = false;
  constructor(
    private videoservice: VideoService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}
  AddVideo = new FormGroup({
    Id: new FormControl(''),
    titre: new FormControl('', Validators.required),
    url: new FormControl(''),
    isurl: new FormControl(true),
  });
  ngOnInit(): void {
    this.loading = true;
    // load list of video
    this.videoservice.getData().subscribe((res: Video[]) => {
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element: Video) {
    this.isAdded = false;
    this.modified = element;
    this.AddVideo.setValue({
      Id: element._id,
      titre: element.Titre,
      url: element.url,
      isurl: true,
    });
    document.getElementById('Addclick').click();
  }
  // close modal
  close() {
    document.getElementById('closemodal').click();
    this.files = null;
    this.resetform();
  }
  // delete video
  clickMethod(element) {
    if (confirm('Are you sure to delete ')) {
      this.videoservice.DeleteData(element).subscribe((res: Video[]) => {
        this.rows = res;
        this.isSuccessDeleted = true;
        setTimeout(() => {
          this.isSuccessDeleted = false;
        }, environment.duration);
      });
    }
  }
  //  changer selected video file
  changefile(files) {
    this.files = <File>files[0];
  }
  // update or add new video
  onSubmit() {
    let form = this.AddVideo.value;
    if (form.Id != '') {
      const formData = new FormData();
      if (form.isurl) {
        formData.append('url', form.url);
      } else {
        formData.append('file', this.files, this.files.name);
        formData.append('url', '');
      }
      formData.append('Titre', form.titre);
      formData.append('createdAt', this.modified.createdAt.toString());
      formData.append('ID', this.modified._id);
      this.http
        .put(environment.apiUrl + 'video', formData)
        .subscribe((res: Video[]) => {
          this.rows = res;
          this.isSuccessModified = true;
          this.AddVideo.reset();
          setTimeout(() => {
            this.isSuccessModified = false;
          }, environment.duration);
          document.getElementById('closemodal').click();
        });
    } else {
      const formData = new FormData();
      if (form.isurl) {
        formData.append('url', form.url);
      } else {
        formData.append('file', this.files, this.files.name);
        formData.append('url', '');
      }
      formData.append('Titre', form.titre);

      this.http
        .post(environment.apiUrl + 'video', formData)
        .subscribe((res: Video[]) => {
          this.rows = res;
          this.isSuccessAdded = true;
          this.AddVideo.reset();
          setTimeout(() => {
            this.isSuccessAdded = false;
          }, environment.duration);
          document.getElementById('closemodal').click();
        });
    }
  }
  // reset form
  resetform() {
    this.files = null;
    this.AddVideo.setValue({
      Id: '',
      titre: '',
      url: '',
      isurl: true,
    });
  }
  // open model
  BorderModel(BorderModelContent) {
    this.modalService.open(BorderModelContent, {
      windowClass: 'animated fadeInDown',
      backdrop: 'static',
      keyboard: false,
    });
  }
}
