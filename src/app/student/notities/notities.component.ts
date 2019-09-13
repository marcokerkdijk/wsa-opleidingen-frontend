import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';
import { Observable } from 'rxjs';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { AlertService } from 'src/app/_alert';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { TrajectService } from 'src/app/services/traject.service';
import { Traject } from 'src/app/Objecten/traject';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

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

  constructor(
    private aantekeningService: AantekeningserviceService,
    private alertService: AlertService,
    private authenticatieService: AutenticatieService,
    private trajectService: TrajectService,
    private dataService: DataserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNotitiesVanTrajectOpGebruikerId();
  }

  getNotitiesVanTrajectOpGebruikerId(){
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
  gaNaarNotitieInformatie(aantekening:Aantekening){
    this.geselecteerdeAantekening = aantekening;
    this.dataService.setAantekening(aantekening);
    this.router.navigateByUrl("notitie-informatie");
  }
}
