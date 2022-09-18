import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Text } from 'src/app/Models/Text';
import { environment } from 'src/environments/environment';
import { TextService } from '../services/Text.service';

@Component({
  selector: 'app-texte',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent implements OnInit {
  rows: Text[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Text = {
    _id: '',
    CreatedAt: new Date(),
    ModifiedAt: new Date(),
    Message: '',
    Type: '',
  };
  isSuccessAdded = false;
  isSuccessModified = false;
  isSuccessDeleted = false;
  constructor(
    private texteService: TextService,
    private modalService: NgbModal
  ) {}
  AddTexte = new FormGroup({
    Id: new FormControl(''),
    message: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.loading = true;
    // load list of text
    this.texteService.getData().subscribe((res: Text[]) => {
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element) {
    this.modified = element;
    this.AddTexte.setValue({
      Id: element._id,
      message: element.Message,
    });
    document.getElementById('Addclick').click();
  }
  // delete text
  clickMethod(element) {
    if (confirm('Are you sure to delete ')) {
      this.texteService.DeleteData(element).subscribe((res: Text[]) => {
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
          Message: form.message,
          CreatedAt: this.modified.CreatedAt,
          ModifiedAt: new Date(),
          Type: '',
        })
        .subscribe((res: Text[]) => {
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
          Message: form.message,
          CreatedAt: new Date(),
          ModifiedAt: new Date(),
          Type: '',
        })
        .subscribe((res: Text[]) => {
          this.rows = res;
          this.isSuccessAdded = true;
          this.resetform();
          setTimeout(() => {
            this.isSuccessAdded = false;
          }, environment.duration);
          document.getElementById('closemodel').click();
        });
    }
  }
  close() {
    document.getElementById('closemodel').click();
    this.resetform();
  }
  // open model
  BorderModel(BorderModelContent) {
    this.modalService.open(BorderModelContent, {
      windowClass: 'animated fadeInDown',
      backdrop: 'static',
      keyboard: false,
    });
  }

  resetform() {
    this.AddTexte.setValue({
      Id: '',
      message: '',
    });
  }
}
