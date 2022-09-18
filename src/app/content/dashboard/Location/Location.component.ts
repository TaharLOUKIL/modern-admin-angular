import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from 'src/app/Models/Location';
import { environment } from 'src/environments/environment';
import { LocationService } from '../services/Location.service';
@Component({
  selector: 'app-localisation',
  templateUrl: './Location.component.html',
  styleUrls: ['./Location.component.css'],
})
export class LocationComponent implements OnInit {
  isAdded: boolean;
  rows: Location[] = [];
  searchTerm: string;
  loading = false;
  page = 1;
  total: [1, 2, 3];
  pageSize = 2;
  modified: Location = {
    _id: '',
    CreatedAt: new Date(),
    ModifiedAt: new Date(),
    Lattitude: '',
    Longitude: '',
    Adresse: '',
    Titre: '',
    Type: 'Location',
  };
  isSuccessAdded = false;
  isSuccessModified = false;
  isSuccessDeleted = false;
  constructor(
    private LocalisationService: LocationService,
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
    this.LocalisationService.getData().subscribe((res: Location[]) => {
      console.log(res);
      this.rows = res;
      this.loading = false;
    });
  }
  // reset form when click on update
  UpdateTexte(element: Location) {
    console.log(element);
    this.isAdded = false;
    this.modified = element;
    this.AddLocalisation.setValue({
      Id: element._id,
      latitude: element.Lattitude,
      longitude: element.Longitude,
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
        (res: Location[]) => {
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
        Lattitude: form.latitude,
        Longitude: form.longitude,
        Adresse: form.adresse,
        Titre: form.titre,
        CreatedAt: this.modified.CreatedAt,
        ModifiedAt: new Date(),
        Type: 'Location',
      }).subscribe((res: Location[]) => {
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
        Lattitude: form.latitude,
        Longitude: form.longitude,
        Adresse: form.adresse,
        Titre: form.titre,
        CreatedAt: this.modified.CreatedAt,
        ModifiedAt: new Date(),
        Type: 'Location',
      }).subscribe((res: Location[]) => {
        this.rows = res;
        this.isSuccessAdded = true;
        this.resetform();
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
