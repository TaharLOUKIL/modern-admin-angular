import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { timeStamp } from 'console';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { Localisation } from 'src/app/Models/Localisation';
import { Texte } from 'src/app/Models/Texte';
import { environment } from 'src/environments/environment';
import { LocalisationService } from '../services/Localisation.service';
@Component({
  selector: 'app-localisation',
  templateUrl: './localisation.component.html',
  styleUrls: ['./localisation.component.css'],
})
export class LocalisationComponent implements OnInit {
  isAdded: boolean;
  rows: Localisation[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Localisation = {
    _id: '',
    CreatedAt: new Date(),
    ModifiedAt: new Date(),
    lattitude: '',
    longitude: '',
    Adresse: '',
    Titre: '',
  };
  isSuccessAdded = false;
  isSuccessModified = false;
  isSuccessDeleted = false;
  constructor(
    private LocalisationService: LocalisationService,
    private modalService: NgbModal
  ) {}
  AddLocalisation = new FormGroup({
    Id: new FormControl(''),
    latitude: new FormControl('', Validators.required),
    longitude: new FormControl('', Validators.required),
    adresse: new FormControl('', Validators.required),
    titre: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.loading = true;
    // load list of localisation
    this.LocalisationService.getData().subscribe((res: Localisation[]) => {
      console.log(res);
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element: Localisation) {
    this.isAdded = false;
    this.modified = element;
    this.AddLocalisation.setValue({
      Id: element._id,
      latitude: element.lattitude,
      longitude: element.longitude,
      adresse: element.Adresse,
      titre: element.Titre,
    });
    document.getElementById('Addclick').click();
  }
  // close modal
  close() {
    document.getElementById('closemodal').click();
    this.resetform();
  }
  // delete localisation
  clickMethod(element) {
    if (confirm('Are you sure to delete ')) {
      this.LocalisationService.DeleteData(element).subscribe(
        (res: Localisation[]) => {
          this.rows = res;
          this.isSuccessDeleted = true;
          setTimeout(() => {
            this.isSuccessDeleted = false;
          }, environment.duration);
        }
      );
    }
  }
  // update or add new localisation
  onSubmit() {
    let form = this.AddLocalisation.value;
    if (form.Id != '') {
      this.LocalisationService.PutData({
        _id: this.modified._id,
        lattitude: form.latitude,
        longitude: form.longitude,
        Adresse: form.adresse,
        Titre: form.titre,
        CreatedAt: this.modified.CreatedAt,
        ModifiedAt: new Date(),
      }).subscribe((res: Localisation[]) => {
        this.resetform();
        this.rows = res;
        document.getElementById('closemodal').click();
        this.isSuccessModified = true;
        setTimeout(() => {
          this.isSuccessModified = false;
        }, environment.duration);
      });
    } else {
      this.LocalisationService.PostData({
        _id: '',
        lattitude: form.latitude,
        longitude: form.longitude,
        Adresse: form.adresse,
        Titre: form.titre,
        CreatedAt: this.modified.CreatedAt,
        ModifiedAt: new Date(),
      }).subscribe((res: Localisation[]) => {
        this.rows = res;
        this.isSuccessAdded = true;
        this.AddLocalisation.reset();
        setTimeout(() => {
          this.isSuccessAdded = false;
        }, environment.duration);
        document.getElementById('closemodal').click();
      });
    }
  }
  // reset form
  resetform() {
    this.AddLocalisation.setValue({
      Id: '',
      latitude: '',
      longitude: '',
      adresse: '',
      titre: '',
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
