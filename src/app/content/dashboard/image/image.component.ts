import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Image } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';
import { ImageService } from '../services/Image.service';
import { LocalisationService } from '../services/Localisation.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  progress: number;
  message: string;
  files = null;
  isAdded: boolean;
  rows: Image[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Image = {
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
    private imageService: ImageService,
    private modalService: NgbModal,
    private http: HttpClient
  ) {}
  AddImage = new FormGroup({
    Id: new FormControl(''),
    titre: new FormControl('', Validators.required),
    url: new FormControl(''),
    isurl: new FormControl(true),
  });

  ngOnInit(): void {
    this.loading = true;
    // load list of image
    this.imageService.getData().subscribe((res: Image[]) => {
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element: Image) {
    this.isAdded = false;
    this.modified = element;
    this.AddImage.setValue({
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
  // delete image file
  clickMethod(element) {
    if (confirm('Are you sure to delete ')) {
      this.imageService.DeleteData(element).subscribe((res: Image[]) => {
        this.rows = res;
        this.isSuccessDeleted = true;
        setTimeout(() => {
          this.isSuccessDeleted = false;
        }, environment.duration);
      });
    }
  }
  // change  image
  changefile(files) {
    this.files = <File>files[0];
  }
  // update or add new image
  onSubmit() {
    let form = this.AddImage.value;
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
        .put(environment.apiUrl + 'image', formData)
        .subscribe((res: Image[]) => {
          this.rows = res;
          this.isSuccessModified = true;
          this.AddImage.reset();
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
        .post(environment.apiUrl + 'image', formData)
        .subscribe((res: Image[]) => {
          this.rows = res;
          this.isSuccessAdded = true;
          this.AddImage.reset();
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
    this.AddImage.setValue({
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
