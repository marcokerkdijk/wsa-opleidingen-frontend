import { Component, OnInit } from '@angular/core';
import { TrajectService } from '../services/traject.service';
import { Router } from '@angular/router';
import { Traject } from '../traject';
import {AutenticatieService, JwtResponse, JwtToken} from "../services/autenticatie.service";

@Component({
  selector: 'wsa-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  traject: Traject = new Traject();

  constructor(private trajectService: TrajectService, 
    private router: Router, private authenticatieService:AutenticatieService) { }

    gebruiker:JwtToken;

  ngOnInit() {
    this.haalGebruikerOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

}
