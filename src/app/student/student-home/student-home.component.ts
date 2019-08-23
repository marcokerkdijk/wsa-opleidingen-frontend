import { Component, OnInit } from '@angular/core';
import { AutenticatieService, JwtToken } from 'src/app/services/autenticatie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  gebruiker:JwtToken;
  
  constructor(
    private authenticatieService:AutenticatieService,
    private router: Router,) { }

  ngOnInit() {
    this.haalGebruikerOp();
  }
  
  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  // NavigeerNaarOpdrachten(){
  //   this.router.navigateByUrl("/student/opdrachten")
  // }
}
