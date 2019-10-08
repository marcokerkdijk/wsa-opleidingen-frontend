import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { UitwerkingType } from 'src/app/model/uitwerking-type.enum';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-resultaat-invoeren',
  templateUrl: './resultaat-invoeren.component.html',
  styleUrls: ['./resultaat-invoeren.component.scss']
})
export class ResultaatInvoerenComponent implements OnInit {
  traject_id: number;
  rolIngelogdeGebruiker: string;
  assessments: Opdracht[] = new Array;
  assessment: Opdracht = new Opdracht;
  studenten: Gebruiker[] = new Array;
  student: Gebruiker = new Gebruiker;
  resultaat: Uitwerking = new Uitwerking;

  constructor(private activeRoute: ActivatedRoute, private opdrachtservice: OpdrachtService,
              private gebruikerservice: GebruikersService, private uitwerkingservice: UitwerkingService,
              private authenticatieService: AutenticatieService, private router: Router) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.traject_id = id;
    this.rolIngelogdeGebruiker = this.authenticatieService.krijgRol();
    this.haalAssessmentsOp(id);
    this.haalStudentenOp(id);
  }

  haalAssessmentsOp(traject_id: number): void {
    this.opdrachtservice.geefAssessmentsVanTraject(traject_id).subscribe(assessmentlijst => {
      this.assessments = assessmentlijst;
    });
  }

  haalStudentenOp(traject_id: number): void {
    this.gebruikerservice.haalAlleActieveStudentenVanTraject(traject_id).subscribe(studentenlijst => {
      this.studenten = studentenlijst;
    });
  }

  resultaatOpslaan(resultaat: Uitwerking): void {
    resultaat.type = UitwerkingType.ASSESSMENTRESULTAAT;
    this.uitwerkingservice.maakUitwerking(this.student.id, this.assessment.id, resultaat).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-resultaten/' + this.traject_id);
    });
  }
}
