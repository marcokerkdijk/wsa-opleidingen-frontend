import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { Router } from '@angular/router';
import { TekstobjectService } from 'src/app/services/tekstobject.service';
import { TekstObject } from 'src/app/Objecten/tekst-object';

@Component({
  selector: 'wsa-recruiter-home',
  templateUrl: './recruiter-home.component.html',
  styleUrls: ['./recruiter-home.component.scss']
})
export class RecruiterHomeComponent implements OnInit {
  gebruiker: JwtToken;
  tekstObject: TekstObject = new TekstObject();


  constructor(private router: Router, private authenticatieService:AutenticatieService,
              private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.getTekstObject(304);
  }
  
  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }

}