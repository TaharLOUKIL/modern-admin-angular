import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timeStamp } from 'console';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { Texte } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';
import { TexteService } from '../services/Texte.service';

@Component({
  selector: 'app-texte',
  templateUrl: './texte.component.html',
  styleUrls: ['./texte.component.css'],
})
export class TexteComponent implements OnInit {
  rows: Texte[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Texte = {
    _id: '',
    createdAt: new Date(),
    modifiedAt: new Date(),
    message: '',
    type: '',
  };
  isSuccessAdded = false;
  isSuccessModified = false;
  isSuccessDeleted = false;
  constructor(
    private texteService: TexteService,
    private modalService: NgbModal
  ) {}
  AddTexte = new FormGroup({
    Id: new FormControl(''),
    message: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.loading = true;
    // load list of text
    this.texteService.getData().subscribe((res: Texte[]) => {
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element) {
    this.modified = element;
    this.AddTexte.setValue({
      Id: element._id,
      message: element.message,
    });
    document.getElementById('Addclick').click();
  }
  // delete text
  clickMethod(element) {
    if (confirm('Are you sure to delete ')) {
      this.texteService.DeleteData(element).subscribe((res: Texte[]) => {
        this.rows = res;
        this.isSuccessDeleted = true;
        setTimeout(() => {
          this.isSuccessDeleted = false;
        }, environment.duration);
      });
    }
  }
  // update or add new text
  onSubmit() {
    let form = this.AddTexte.value;
    if (form.Id != '') {
      this.texteService
        .PutData({
          _id: this.modified._id,
          message: form.message,
          createdAt: this.modified.createdAt,
          modifiedAt: new Date(),
          type: '',
        })
        .subscribe((res: Texte[]) => {
          this.AddTexte.setValue({
            Id: '',
            message: '',
          });
          this.rows = res;
          document.getElementById('closemodel').click();
          this.isSuccessModified = true;
          setTimeout(() => {
            this.isSuccessModified = false;
          }, environment.duration);
        });
    } else {
      this.texteService
        .PostData({
          _id: '',
          message: form.message,
          createdAt: new Date(),
          modifiedAt: new Date(),
          type: '',
        })
        .subscribe((res: Texte[]) => {
          this.rows = res;
          this.isSuccessAdded = true;
          this.AddTexte.reset();
          setTimeout(() => {
            this.isSuccessAdded = false;
          }, environment.duration);
          document.getElementById('closemodel').click();
        });
    }
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
