import { Component, OnInit } from '@angular/core';
import { JwtToken, AutenticatieService } from 'src/app/services/autenticatie.service';
import { Traject } from 'src/app/Objecten/traject';
import { TrajectService } from 'src/app/services/traject.service';

@Component({
  selector: 'wsa-docent-home',
  templateUrl: './docent-home.component.html',
  styleUrls: ['./docent-home.component.scss']
})
export class DocentHomeComponent implements OnInit {
  gebruiker: JwtToken;
  trajectenDocent: Traject[];

  constructor(private authenticatieService: AutenticatieService, private trajectService: TrajectService) { }

  ngOnInit() {
    this.haalGebruikerOp();
    this.haalTrajectenVanDocentOp();
  }

  haalGebruikerOp():void {
    this.gebruiker = this.authenticatieService.haalTokenOp();
  }

  haalTrajectenVanDocentOp():void {
    this.trajectService.haalTrajectenOpVanGebruiker(this.gebruiker.gebruiker_id)
        .subscribe(trajecten => this.trajectenDocent = trajecten);
  }
}
