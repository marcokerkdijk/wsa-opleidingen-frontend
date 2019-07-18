import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from '../services/autenticatie.service';

@Component({
  selector: 'wsa-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  gebruiker:JwtToken;

  constructor(private authenticatieService:AutenticatieService) { }

  ngOnInit() {
    this.haalGebruikerOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

}
