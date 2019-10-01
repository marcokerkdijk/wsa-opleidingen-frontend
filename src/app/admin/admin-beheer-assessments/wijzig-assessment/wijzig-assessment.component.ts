import { Component, OnInit } from '@angular/core';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';
import { TrajectonderdeelService } from 'src/app/services/trajectonderdeel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { OpdrachtDTO } from 'src/app/Objecten/opdracht-dto';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-wijzig-assessment',
  templateUrl: './wijzig-assessment.component.html',
  styleUrls: ['./wijzig-assessment.component.scss']
})
export class WijzigAssessmentComponent implements OnInit {
  rolIngelogdeGebruiker: string;
  assessment: OpdrachtDTO = new OpdrachtDTO;
  trajectonderdelen: TrajectOnderdeel[] = new Array;

  constructor(private trajectonderdeelservice: TrajectonderdeelService, private activeRoute: ActivatedRoute,
              private opdrachtservice: OpdrachtService, private router: Router,
              private authenticatieService: AutenticatieService) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.haalAssessmentDTOOP(id);
    this.haalTrajectonderdelenOp();
    this.rolIngelogdeGebruiker = this.authenticatieService.krijgRol();
  }

  haalAssessmentDTOOP(id: number): void {
    this.opdrachtservice.geefOpdrachtDTO(id).subscribe(assessmentDTO => {
      this.assessment = assessmentDTO;
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
    });
  }
}
