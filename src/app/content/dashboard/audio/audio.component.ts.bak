import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Audio } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';
import { AudioService } from '../services/Audio.service';
import { ImageService } from '../services/Image.service';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent implements OnInit {
  progress: number;
  message: string;
  files;
  isAdded: boolean;
  rows: Audio[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Audio = {
    _id: '',
    type: '',
    createdAt: new Date(),
    modifiedAt: new Date(),
    Titre: '',
    url: '',
  };
  isSuccessAdded = false;
  isSuccessModified = false;
  isSuccessDeleted = false;
  constructor(
    private audioService: AudioService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}
  AddAudio = new FormGroup({
    Id: new FormControl(''),
    titre: new FormControl('', Validators.required),
    url: new FormControl(''),
    isurl: new FormControl(true),
  });

  ngOnInit(): void {
    this.loading = true;
    // load list of audio
    this.audioService.getData().subscribe((res: Audio[]) => {
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element: Audio) {
    this.isAdded = false;
    this.modified = element;
    this.AddAudio.setValue({
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
  // delete audio
  clickMethod(element) {
    if (confirm('Are you sure to delete ')) {
      this.audioService.DeleteData(element).subscribe((res: Audio[]) => {
        this.rows = res;
        this.isSuccessDeleted = true;
        setTimeout(() => {
          this.isSuccessDeleted = false;
        }, environment.duration);
      });
    }
  }
  // change audio file
  changefile(files) {
    this.files = <File>files[0];
  }
  // update or add new audio
  onSubmit() {
    let form = this.AddAudio.value;
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
        .put(environment.apiUrl + 'audio', formData)
        .subscribe((res: Audio[]) => {
          this.rows = res;
          this.isSuccessModified = true;
          this.AddAudio.reset();
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
        .post(environment.apiUrl + 'audio', formData)
        .subscribe((res: Audio[]) => {
          this.rows = res;
          this.isSuccessAdded = true;
          this.AddAudio.reset();
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
    this.AddAudio.setValue({
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
