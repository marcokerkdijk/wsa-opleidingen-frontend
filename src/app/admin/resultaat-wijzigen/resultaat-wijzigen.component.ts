import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { AutenticatieService } from 'src/app/services/autenticatie.service';

@Component({
  selector: 'wsa-resultaat-wijzigen',
  templateUrl: './resultaat-wijzigen.component.html',
  styleUrls: ['./resultaat-wijzigen.component.scss']
})
export class ResultaatWijzigenComponent implements OnInit {
  rolIngelogdeGebruiker: string;
  traject_id: number;
  assessments: Opdracht[] = new Array;
  studenten: Gebruiker[] = new Array;
  resultaat: Uitwerking = new Uitwerking;

  constructor(private activeRoute: ActivatedRoute, private dataservice: DataserviceService,
              private uitwerkingservice: UitwerkingService, private opdrachtservice: OpdrachtService,
              private gebruikerservice: GebruikersService, private router: Router,
              private authenticatieService: AutenticatieService) { }

  ngOnInit() {
    this.traject_id = this.dataservice.getTraject_id();
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.haalUitwerkingOp(id);
    this.haalAssessmentsOp(this.traject_id);
    this.haalStudentenOp(this.traject_id);
    this.rolIngelogdeGebruiker = this.authenticatieService.krijgRol();
  }

  haalUitwerkingOp(uitwerking_id: number): void {
    this.uitwerkingservice.haalUitwerkingOp(uitwerking_id).subscribe(uitwerking => {
      this.resultaat = uitwerking;
    });
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

  resultaatWijzigen(resultaat: Uitwerking): void {
    this.uitwerkingservice.wijzigUitwerking(resultaat.gebruiker.id, resultaat).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-resultaten/' + this.traject_id);
    });
  }
}
