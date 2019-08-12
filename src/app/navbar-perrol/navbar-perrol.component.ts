import { Component, OnInit } from '@angular/core';
import { AutenticatieService } from "../services/autenticatie.service";
import { Router } from "@angular/router";
import { TokenService } from "../services/token.service";
import { Location } from "@angular/common";

@Component({
  selector: 'wsa-navbar-perrol',
  templateUrl: './navbar-perrol.component.html',
  styleUrls: ['./navbar-perrol.component.scss']
})
export class NavbarPerrolComponent implements OnInit {
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
    console.log(this.rol);
  }

  public terug(): void {
    if (this.currentLocation.path() === '/' + this.rol) {
      // Je kunt niet verder terug
    }
    else {
      this.currentLocation.back();
    }
  }

  public naarProfiel(): void {
    this.router.navigateByUrl("/profiel");
  }

  public logout(): void {
    const redirect = this.autenticatieService.logout();
    this.ingelogd = this.tokenService.isIngelogd();
    this.router.navigateByUrl(redirect);
  }
}
