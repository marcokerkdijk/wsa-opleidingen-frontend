import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { TrajectService } from 'src/app/services/traject.service';
import { AlertService } from 'src/app/_alert';
import { DataserviceService } from 'src/app/services/dataservice.service'; 
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  gebruiker: Gebruiker = new Gebruiker;
  index: number = 0;
  trajecten: Traject[] = new Array;
  trajectVanGebruiker: Traject = new Traject;
  tekstObject: TekstObject = new TekstObject();
  
  constructor(private authenticatieService:AutenticatieService, private trajectService: TrajectService,
              private alertservice: AlertService, private dataservice: DataserviceService, private gebruikersService: GebruikersService,
              private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.getTekstObject(2);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
  
  haalGebruikerOp():void {
    let token = this.authenticatieService.haalTokenOp();
    this.HaalTrajectBijGebruikerOp(token.gebruiker_id);
    this.gebruikersService.vraagGebruikerOpId(token.gebruiker_id).subscribe(opgehaaldeGebruiker => {
      this.gebruiker = opgehaaldeGebruiker
    })
  }

  HaalTrajectBijGebruikerOp(id:number){
    this.trajectService.geefAlleTrajectenVanGebruiker(id).subscribe(trajecten => {
      this.trajecten = trajecten;
      this.trajectVanGebruiker = trajecten[0];
      this.trajectVanGebruiker.trajectOnderdelen.sort((b, a) => new Date(b.startdatum).getTime() - new Date(a.startdatum).getTime());
    },
    (error) => {
      this.alertservice.error("Je bent nog niet aan een traject gekoppeld.", "alert-1");
    });
  }

  setTraject(): void {
    this.dataservice.setTraject_id(this.trajectVanGebruiker.id);
  }
}