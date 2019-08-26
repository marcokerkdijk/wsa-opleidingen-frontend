import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticatieService } from '../services/autenticatie.service';
import { TokenService } from '../services/token.service';
import { Location } from "@angular/common";

@Component({
  selector: 'wsa-navbar-per-rol',
  templateUrl: './navbar-per-rol.component.html',
  styleUrls: ['./navbar-per-rol.component.scss']
})
export class NavbarPerRolComponent implements OnInit {
  ingelogd: boolean = false;
  rol: string;
  locatie: string;

  constructor(private router: Router, private autenticatieService: AutenticatieService, 
              private tokenService: TokenService, private currentLocation: Location) {
  }

  ngOnInit() {
    this.checkInlogEnKrijgRol();
  }

  public checkInlogEnKrijgRol(): void {
    this.ingelogd = this.tokenService.isIngelogd();
    this.rol = this.autenticatieService.krijgRol();
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
