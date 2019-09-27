import { Component, OnInit } from '@angular/core';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-beheer-gebruikers',
  templateUrl: './beheer-gebruikers.component.html',
  styleUrls: ['./beheer-gebruikers.component.scss']
})
export class BeheerGebruikersComponent implements OnInit {
  gebruikerInvoer: Gebruiker = new Gebruiker;
  actieveGebruikers : Gebruiker[];
 
  constructor(private router: Router, private gebruikerService : GebruikersService) { }
 
  ngOnInit() {
    this.haalActieveGebruikers();
  }
  
  haalActieveGebruikers(): void {
    this.gebruikerService.geefActieveGebruikers()
        .subscribe(gebruikers => this.actieveGebruikers = gebruikers);
  }
 
  haalGebruikerOpId(id:number): void {
    this.gebruikerService.vraagGebruikerOpId(id).subscribe(gebruiker => this.gebruikerInvoer = gebruiker);
  }

}
