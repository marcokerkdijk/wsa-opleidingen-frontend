import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { Traject } from 'src/app/Objecten/traject';
import { TrajectService } from 'src/app/services/traject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.scss']
})
export class RecruiterHomeComponent implements OnInit {
  gebruiker: JwtToken;
  traject: Traject = new Traject();

  alleTrajecten : Traject[];

  constructor(private trajectService: TrajectService, 
    private router: Router, private authenticatieService:AutenticatieService) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.getAlleTrajecten();
  }
  
  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  getAlleTrajecten(): void {
    this.trajectService.GeefAlleTrajecten()
        .subscribe(alleTrajecten => this.alleTrajecten = alleTrajecten);
  }

}