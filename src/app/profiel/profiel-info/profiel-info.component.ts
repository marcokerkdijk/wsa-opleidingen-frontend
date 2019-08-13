import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';

@Component({
  selector: 'wsa-profiel-info',
  templateUrl: './profiel-info.component.html',
  styleUrls: ['./profiel-info.component.scss']
})
export class ProfielInfoComponent implements OnInit {
  token: JwtToken;
  gebruiker: Gebruiker = new Gebruiker();

  constructor(private authenticatieService: AutenticatieService, private gebruikersService: GebruikersService) { }

  ngOnInit() {
    this.haalTokenOp();
    this.haalGebruikerOp();
  }

  haalTokenOp():void {
    this.token = this.authenticatieService.haalTokenOp();
  }

  haalGebruikerOp(): void {
    this.gebruikersService.vraagGebruikerOpId(this.token.gebruiker_id)
        .subscribe(opgehaaldeGebruiker => this.gebruiker = opgehaaldeGebruiker);
  }

  wijzigWachtwoord(): void {

  }
}
