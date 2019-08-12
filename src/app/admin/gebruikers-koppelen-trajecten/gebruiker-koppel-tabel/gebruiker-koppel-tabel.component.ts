import { Component, OnInit } from '@angular/core';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { GebruikersRol } from 'src/app/model/GebruikersRol';

@Component({
  selector: 'wsa-gebruiker-koppel-tabel',
  templateUrl: './gebruiker-koppel-tabel.component.html',
  styleUrls: ['./gebruiker-koppel-tabel.component.scss']
})
export class GebruikerKoppelTabelComponent implements OnInit {
  studenten:Gebruiker[];
  docenten:Gebruiker[];

  constructor(private gebruikerService:GebruikersService) { }

  ngOnInit() {
    this.haalGekoppeldeGebruikerOp("STUDENT");
    this.haalGekoppeldeGebruikerOp("DOCENT");
  }

  haalGekoppeldeGebruikerOp (rol): void {
    this.gebruikerService.gebruikerOpvragenRol(rol).subscribe(gebruiker => this.docenten = gebruiker);
  }
}
