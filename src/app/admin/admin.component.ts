import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from '../services/autenticatie.service';
import { TrajectService } from '../services/traject.service';
import { Router } from '@angular/router';
import { Traject } from '../traject';
import { Observable } from 'rxjs';

@Component({
  selector: 'wsa-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
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
