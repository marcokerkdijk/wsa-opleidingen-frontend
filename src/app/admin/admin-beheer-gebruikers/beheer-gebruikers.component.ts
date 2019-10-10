import { Component, OnInit } from '@angular/core';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { Router } from '@angular/router';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-beheer-gebruikers',
  templateUrl: './beheer-gebruikers.component.html',
  styleUrls: ['./beheer-gebruikers.component.scss']
})
export class BeheerGebruikersComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  actieveGebruikers: Gebruiker[];
  tekstObject: TekstObject = new TekstObject();

  constructor(private router: Router, private gebruikerService: GebruikersService,
    private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.haalActieveGebruikers();
    this.getTekstObject(13);
  }

  haalActieveGebruikers(): void {
    this.gebruikerService.geefActieveGebruikers()
      .subscribe(gebruikers => this.actieveGebruikers = gebruikers);
  }

  haalGebruikerOpId(id: number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(gebruiker => this.gebruikerInvoer = gebruiker);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}