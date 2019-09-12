import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { TrajectDTO } from 'src/app/Objecten/traject-dto';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-traject-wijzigen',
  templateUrl: './traject-wijzigen.component.html',
  styleUrls: ['./traject-wijzigen.component.scss']
})
export class TrajectWijzigenComponent implements OnInit {
  traject: TrajectDTO = new TrajectDTO;
  onderdeelWijzigen: boolean;
  trajectonderdeel: TrajectOnderdeel = new TrajectOnderdeel;
  rolIngelogdeGebruiker: string;

  constructor(private activeRouter: ActivatedRoute, private trajectservice: TrajectService,
              private router: Router, private authenticatieservice: AutenticatieService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalTrajectOp(id);
    this.rolIngelogdeGebruiker = this.authenticatieservice.krijgRol();
  }

  haalTrajectOp(id: number): void {
    this.trajectservice.geefTrajectDTOMetTrajectId(id).subscribe(trajectDTO => {
      this.traject = trajectDTO;
    });
  }

  maakNieuwTrajectonderdeel(trajectonderdeel: TrajectOnderdeel) {
    let nieuwTrajectonderdeel = trajectonderdeel;
    nieuwTrajectonderdeel.index = this.traject.trajectOnderdelen.length + 1;
    this.traject.trajectOnderdelen.push(nieuwTrajectonderdeel);
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

    for (let i = 1; i < this.traject.trajectOnderdelen.length; i++) {
      if (this.traject.trajectOnderdelen[i].index === trajectonderdeel.index) {
        arrayindex = i;
      }
    }

    if (arrayindex !== -1) {
      this.traject.trajectOnderdelen.splice(arrayindex, 1);
    }

    this.traject.trajectOnderdelen.push(gewijzigdTrajectonderdeel);
    this.trajectonderdeel = new TrajectOnderdeel;
    this.onderdeelWijzigen = false;
  }

  verwijderOnderdeel(trajectonderdeel: TrajectOnderdeel): void {
    let arrayindex: number;

    for (let i = 1; i < this.traject.trajectOnderdelen.length; i++) {
      if (this.traject.trajectOnderdelen[i].index === trajectonderdeel.index) {
        arrayindex = i;
      }
    }

    if (arrayindex !== -1) {
      this.traject.trajectOnderdelen.splice(arrayindex, 1);
    }
  }

  trajectOpslaan(traject: TrajectDTO) {
    this.trajectservice.wijzigTraject(traject).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-traject');
    });
  }
}
