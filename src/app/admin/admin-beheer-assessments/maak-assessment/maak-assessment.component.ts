import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { TrajectonderdeelService } from 'src/app/services/trajectonderdeel.service';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router } from '@angular/router';
import { OpdrachtType } from 'src/app/model/opdracht-type.enum';

@Component({
  selector: 'wsa-maak-assessment',
  templateUrl: './maak-assessment.component.html',
  styleUrls: ['./maak-assessment.component.scss']
})
export class MaakAssessmentComponent implements OnInit {
  assessment: Opdracht = new Opdracht;
  trajectonderdelen: TrajectOnderdeel[] = new Array;

  constructor(private trajectonderdeelservice: TrajectonderdeelService, private opdrachtservice: OpdrachtService,
              private router: Router) { }

  ngOnInit() {
    this.haalTrajectonderdelenOp();
  }

  haalTrajectonderdelenOp(): void {
    this.trajectonderdeelservice.geefAlleTrajectonderdelen().subscribe(onderdeelLijst => {
      this.trajectonderdelen = onderdeelLijst;
    });
  }

  assessmentOpslaan(assessment: Opdracht): void {
    assessment.type = OpdrachtType.ASSESSMENT;
    this.opdrachtservice.maakOpdrachtAan(assessment).subscribe(response => {
      this.router.navigateByUrl('admin/beheer-assessments');
    });
  }
}