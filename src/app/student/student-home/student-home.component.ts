import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { Traject } from 'src/app/Objecten/traject';
import { AutenticatieService, JwtToken } from 'src/app/services/autenticatie.service';
import { TrajectService } from 'src/app/services/traject.service';
import {Observable, of} from 'rxjs';
import { SelectieFase } from 'src/app/Objecten/selectieFase';
import { OpleidingsFase } from 'src/app/Objecten/opleidingsfase';

@Component({
  selector: 'wsa-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  gebruiker:JwtToken;
  index: number = 0;
  trajecten: Traject[];
  SelectieFase: SelectieFase[]; 
  OpleidingsFase: OpleidingsFase[]; 

  
  
  constructor(
    private authenticatieService:AutenticatieService,
    private router: Router,
    private trajectService: TrajectService,
    ) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.HaalTrajectBijGebruikerOp();
  }
  
  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  HaalTrajectBijGebruikerOp(){
    this.trajectService.haalTrajectenOpVanGebruiker(this.gebruiker.gebruiker_id)
    .subscribe(trajecten => this.trajecten = trajecten);
 
  }
}
