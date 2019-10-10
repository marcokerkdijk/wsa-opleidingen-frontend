import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticatieService } from '../services/autenticatie.service';
import { TokenService } from '../services/token.service';
import { Location } from "@angular/common";
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { GebruikersService } from 'src/app/services/gebruikers.service';

@Component({
  selector: 'wsa-navbar-per-rol',
  templateUrl: './navbar-per-rol.component.html',
  styleUrls: ['./navbar-per-rol.component.scss']
})
export class NavbarPerRolComponent implements OnInit {
  gebruiker: Gebruiker = new Gebruiker;
  ingelogd: boolean = false;
  rol: string;
  locatie: string;

  constructor(private router: Router, private autenticatieService: AutenticatieService, 
              private tokenService: TokenService, private currentLocation: Location,
              private gebruikersService: GebruikersService) {
  }

  ngOnInit() {
    this.checkInlogEnKrijgRol();
  }

  public checkInlogEnKrijgRol(): void {
    this.ingelogd = this.tokenService.isIngelogd();
    this.rol = this.autenticatieService.krijgRol();
    let token = this.autenticatieService.haalTokenOp();
    console.log(token.gebruiker_id);
    this.gebruikersService.vraagGebruikerOpId(token.gebruiker_id).subscribe(opgehaaldeGebruiker => {
      this.gebruiker = opgehaaldeGebruiker
    });
  }

  public terug(): void {
    if (this.currentLocation.path() === '/' + this.rol) {
      // Je kunt niet verder terug
    }
    else {
      this.currentLocation.back();
    }
  }

  public navigeerNaar(url: string): void {
    this.router.navigateByUrl("/" + url);
  }

  public logout(): void {
    const redirect = this.autenticatieService.logout();
    this.ingelogd = this.tokenService.isIngelogd();
    this.router.navigateByUrl(redirect);
  }
}