import { Component, OnInit } from '@angular/core';
import {AutenticatieService, JwtResponse, JwtToken} from "../services/autenticatie.service";

@Component({
  selector: 'wsa-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  gebruiker:JwtToken;

  constructor(private authenticatieService:AutenticatieService) { }

  ngOnInit() {
    this.haalGebruikerOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

}
