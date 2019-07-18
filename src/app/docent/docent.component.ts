import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from '../services/autenticatie.service';

@Component({
  selector: 'wsa-docent',
  templateUrl: './docent.component.html',
  styleUrls: ['./docent.component.scss']
})
export class DocentComponent implements OnInit {
  gebruiker:JwtToken;

  constructor(private authenticatieService:AutenticatieService) { }

  ngOnInit() {
    this.haalGebruikerOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

}
