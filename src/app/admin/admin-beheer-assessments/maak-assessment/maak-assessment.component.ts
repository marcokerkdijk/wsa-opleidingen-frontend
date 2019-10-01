import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { TrajectonderdeelService } from 'src/app/services/trajectonderdeel.service';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router } from '@angular/router';
import { OpdrachtType } from 'src/app/model/opdracht-type.enum';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-maak-assessment',
  templateUrl: './maak-assessment.component.html',
  styleUrls: ['./maak-assessment.component.scss']
})
export class MaakAssessmentComponent implements OnInit {
  rolIngelogdeGebruiker: string;
  assessment: Opdracht = new Opdracht;
  trajectonderdelen: TrajectOnderdeel[] = new Array;

  constructor(private trajectonderdeelservice: TrajectonderdeelService, private opdrachtservice: OpdrachtService,
              private router: Router, private authenticatieService: AutenticatieService) { }

  ngOnInit() {
    this.haalTrajectonderdelenOp();
    this.rolIngelogdeGebruiker = this.authenticatieService.krijgRol();
  }

  haalTrajectonderdelenOp(): void {
    this.trajectonderdeelservice.geefAlleTrajectonderdelen().subscribe(onderdeelLijst => {
      this.trajectonderdelen = onderdeelLijst;
    });
  }

  assessmentOpslaan(assessment: Opdracht): void {
    assessment.type = OpdrachtType.ASSESSMENT;
    this.opdrachtservice.maakOpdrachtAan(assessment).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-assessments');
    });
  }
}
