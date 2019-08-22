import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from '../services/autenticatie.service';

@Component({
  selector: 'wsa-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent implements OnInit {
  gebruiker:JwtToken;

  constructor(private authenticatieService:AutenticatieService) { }

  ngOnInit() {
    this.haalGebruikerOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

}
