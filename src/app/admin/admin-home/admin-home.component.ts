import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  gebruiker: JwtToken;

  constructor(
    private authenticatieService:AutenticatieService) { }

  ngOnInit() {
    this.haalGebruikerOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

}