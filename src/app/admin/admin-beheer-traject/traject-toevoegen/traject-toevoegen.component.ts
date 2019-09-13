import { Component, OnInit } from '@angular/core';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { TrajectService } from 'src/app/services/traject.service';
import { Router } from '@angular/router';
import { TrajectDTO } from 'src/app/Objecten/traject-dto';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-traject-toevoegen',
  templateUrl: './traject-toevoegen.component.html',
  styleUrls: ['./traject-toevoegen.component.scss']
})
export class TrajectToevoegenComponent implements OnInit {
  traject: TrajectDTO = new TrajectDTO;
  onderdeelWijzigen: boolean;
  trajectonderdeel: TrajectOnderdeel = new TrajectOnderdeel;
  nieuweTrajectOnderdelen: TrajectOnderdeel[] = new Array;
  rolIngelogdeGebruiker: string;

  constructor(private trajectservice: TrajectService, private router: Router,
              private authenticatieservice: AutenticatieService) { }

  ngOnInit() {
    this.rolIngelogdeGebruiker = this.authenticatieservice.krijgRol();
  }

  verwijderOnderdeel(trajectonderdeel: TrajectOnderdeel): void {
    let arrayindex: number;

    for (let i = 1; i < this.nieuweTrajectOnderdelen.length; i++) {
      if (this.nieuweTrajectOnderdelen[i].index === trajectonderdeel.index) {
        arrayindex = i;
      }
    }

    if (arrayindex !== -1) {
      this.nieuweTrajectOnderdelen.splice(arrayindex, 1);
    }
  }

  maakNieuwTrajectonderdeel(trajectonderdeel: TrajectOnderdeel) {
    let nieuwTrajectonderdeel = trajectonderdeel;
    nieuwTrajectonderdeel.index = this.nieuweTrajectOnderdelen.length + 1;
    this.nieuweTrajectOnderdelen.push(nieuwTrajectonderdeel);
    this.trajectonderdeel = new TrajectOnderdeel;
  }

  wijzigTrajectonderdeel(trajectonderdeel: TrajectOnderdeel) {
    this.trajectonderdeel = trajectonderdeel;
    this.onderdeelWijzigen = true;
  }

  wijzigOnderdeel(trajectonderdeel: TrajectOnderdeel) {
    let gewijzigdTrajectonderdeel = trajectonderdeel;
    gewijzigdTrajectonderdeel.index = trajectonderdeel.index;

    let arrayindex: number;

    for (let i = 1; i < this.nieuweTrajectOnderdelen.length; i++) {
      if (this.nieuweTrajectOnderdelen[i].index === trajectonderdeel.index) {
        arrayindex = i;
      }
    }

    if (arrayindex !== -1) {
      this.nieuweTrajectOnderdelen.splice(arrayindex, 1);
    }

    this.nieuweTrajectOnderdelen.push(gewijzigdTrajectonderdeel);
    this.trajectonderdeel = new TrajectOnderdeel;
    this.onderdeelWijzigen = false;
  }

  trajectOpslaan(traject: TrajectDTO) {
    traject.trajectOnderdelen = this.nieuweTrajectOnderdelen;

    this.trajectservice.maakTrajectAan(traject).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-traject');
    });
  }
}
