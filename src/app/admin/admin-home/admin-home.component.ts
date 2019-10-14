import { Component, OnInit } from '@angular/core';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { TekstobjectService } from 'src/app/services/tekstobject.service';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';

@Component({
  selector: 'wsa-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  gebruiker: Gebruiker = new Gebruiker;
  tekstObject: TekstObject = new TekstObject();

  constructor(
    private authenticatieService:AutenticatieService,
    private tekstobjectservice: TekstobjectService,
    private gebruikersService: GebruikersService) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.getTekstObject(9);
  }

  haalGebruikerOp():void {
    let token = this.authenticatieService.haalTokenOp();
    this.gebruikersService.vraagGebruikerOpId(token.gebruiker_id).subscribe(opgehaaldeGebruiker => {
      this.gebruiker = opgehaaldeGebruiker;
    })
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }

}