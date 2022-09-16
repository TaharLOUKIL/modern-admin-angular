import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { bots } from 'src/app/Models/Bots';
import { environment } from 'src/environments/environment';
import { BotsService } from '../services/bots.service';

@Component({
  selector: 'app-bots',
  templateUrl: './bots.component.html',
  styleUrls: ['./bots.component.css'],
})
export class BotsComponent implements OnInit {
  bots: bots[] = [];
  isSuccessClosed = false;
  Addbot = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  constructor(
    public botservice: BotsService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.botservice.getData().subscribe((res: bots[]) => {
      this.bots = res;
    });
  }

  onSubmit() {
    let name = this.Addbot.value.name;
    this.botservice
      .PostData({
        _id: '',
        Name: name,
      })
      .subscribe((res:any) => {
        this.bots = res;
        this.Addbot.reset();
        document.getElementById('closemodel').click();
        this.isSuccessClosed = true;
        setTimeout(() => {
          this.isSuccessClosed = false;
        }, environment.duration);
      });
  }

  navigate(bot) {
    this.router.navigate(['/bot/' + bot._id]);
  }

  BorderModel(BorderModelContent) {
    this.modalService.open(BorderModelContent, {
      windowClass: 'animated fadeInDown',
      backdrop: 'static',
      keyboard: false,
    });
  }
}
