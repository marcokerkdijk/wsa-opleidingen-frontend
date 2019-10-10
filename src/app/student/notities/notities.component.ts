import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';
import { AlertService } from 'src/app/_alert';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { Traject } from 'src/app/Objecten/traject';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-notities',
  templateUrl: './notities.component.html',
  styleUrls: ['./notities.component.scss']
})
export class NotitiesComponent implements OnInit {
  aantekeningen: Aantekening[]
  traject: Traject = new Traject;
  traject_id: number;
  gebruiker: JwtToken;
  geselecteerdeAantekening: Aantekening;
  tekstObject: TekstObject = new TekstObject();

  constructor(private aantekeningService: AantekeningserviceService, private alertService: AlertService,
    private authenticatieService: AutenticatieService, private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.getNotitiesVanTrajectOpGebruikerId();
    this.getTekstObject(7);
  }

  getNotitiesVanTrajectOpGebruikerId() {
    this.gebruiker = this.authenticatieService.haalTokenOp();
    this.aantekeningService.getNotitiesVanTrajectOpGebruikerId(this.gebruiker.gebruiker_id)
      .subscribe(aantekeningenlijst => {
        this.aantekeningen = aantekeningenlijst;
      },
        (error) => {
          this.alertService.error("Dit traject heeft nog geen aantekeningen.", "alert-1");
        }
      );
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}