import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { Traject } from 'src/app/Objecten/traject';
import { TrajectService } from 'src/app/services/traject.service';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/_alert';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-docent-home',
  templateUrl: './docent-home.component.html',
  styleUrls: ['./docent-home.component.scss']
})
export class DocentHomeComponent implements OnInit {
  gebruiker: JwtToken;
  trajectenDocent: Traject[];
  tekstObject: TekstObject = new TekstObject();

  constructor(private authenticatieService: AutenticatieService, private trajectService: TrajectService, 
              private dataservice: DataserviceService, private router: Router, private alertservice: AlertService,
              private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.haalTrajectenVanDocentOp();
    this.getTekstObject(305);
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  haalTrajectenVanDocentOp():void {
    this.trajectService.geefAlleTrajectenVanGebruiker(this.gebruiker.gebruiker_id)
        .subscribe(trajecten => {
          this.trajectenDocent = trajecten;
        },
        (error) => {
          this.alertservice.error("U bent nog niet aan een traject gekoppeld.", "alert-1");
        }
        );
  }

  naarTrajectPagina(traject: Traject):void {
    this.dataservice.setTraject(traject);
    this.router.navigateByUrl("docent/docent-traject");
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}