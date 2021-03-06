import { Component, OnInit } from '@angular/core';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { TrajectonderdeelService } from 'src/app/services/trajectonderdeel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { OpdrachtDTO } from 'src/app/Objecten/opdracht-dto';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { AlertService } from 'src/app/_alert';
import { Traject } from 'src/app/Objecten/traject';

@Component({
  selector: 'wsa-wijzig-assessment',
  templateUrl: './wijzig-assessment.component.html',
  styleUrls: ['./wijzig-assessment.component.scss']
})
export class WijzigAssessmentComponent implements OnInit {
  rolIngelogdeGebruiker: string;
  assessment: OpdrachtDTO = new OpdrachtDTO;
  trajectonderdelen: TrajectOnderdeel[] = new Array;
  trajectOnderdeel: TrajectOnderdeel = new TrajectOnderdeel;

  constructor(private trajectonderdeelservice: TrajectonderdeelService, private activeRoute: ActivatedRoute,
              private opdrachtservice: OpdrachtService, private router: Router,
              private authenticatieService: AutenticatieService, private alertservice:AlertService) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.rolIngelogdeGebruiker = this.authenticatieService.krijgRol();
    this.haalAssessmentDTOOP(id);
    this.haalTrajectonderdelenOp();
    }

  haalAssessmentDTOOP(id: number): void {
    this.opdrachtservice.geefOpdrachtDTO(id).subscribe(assessmentDTO => {
      this.assessment = assessmentDTO;
      this.trajectOnderdeel = this.assessment.trajectOnderdeel;
    });
  }

  haalTrajectonderdelenOp(): void {
    this.trajectonderdeelservice.geefAlleTrajectonderdelen().subscribe(onderdeelLijst => {
      this.trajectonderdelen = onderdeelLijst;
    });
  }

  assessmentWijzigen(assessmentDTO: OpdrachtDTO): void {
    this.opdrachtservice.wijzigOpdrachtMetDTO(assessmentDTO).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-assessments');
    },
    (error) => {
      this.alertservice.error("Vul alle velden in om een assessment op te kunnen slaan.", "alert-1");
    });
  }
}