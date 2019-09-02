import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { AutenticatieService, JwtToken } from 'src/app/services/autenticatie.service';
import { TrajectService } from 'src/app/services/traject.service';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.scss']
})
export class StudentHomeComponent implements OnInit {
  gebruiker:JwtToken;
  index: number = 0;
  trajecten: Traject[];
  
  constructor(private authenticatieService:AutenticatieService, private trajectService: TrajectService,
              private alertservice: AlertService ) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.HaalTrajectBijGebruikerOp();
  }
  
  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  HaalTrajectBijGebruikerOp(){
    this.trajectService.haalTrajectenOpVanGebruiker(this.gebruiker.gebruiker_id).subscribe(trajecten => {
      this.trajecten = trajecten;
    },
    (error) => {
      this.alertservice.error("Je bent nog niet aan een traject gekoppeld.", "alert-1");
    });
  }
}
