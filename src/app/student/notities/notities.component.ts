import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'wsa-notities',
  templateUrl: './notities.component.html',
  styleUrls: ['./notities.component.scss']
})
export class NotitiesComponent implements OnInit {
  aantekeningen: Aantekening[]

  constructor(
    private aantekeningService: AantekeningserviceService
  ) { }

  ngOnInit() {
    this.getAlleAantekeningen();
  }

  getAlleAantekeningen(){
    this.aantekeningService.getAlleAantekeningen()
    .subscribe(aantekeningen => this.aantekeningen = aantekeningen);
  }

}
