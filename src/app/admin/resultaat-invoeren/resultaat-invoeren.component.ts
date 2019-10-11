import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { GebruikersService } from 'src/app/services/gebruikers.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { UitwerkingType } from 'src/app/model/uitwerking-type.enum';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { AutenticatieService } from 'src/app/services/autenticatie.service';
import { UitwerkingDTO } from 'src/app/Objecten/uitwerking-dto';

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
  resultaatDTO: UitwerkingDTO = new UitwerkingDTO;

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

  voegBestandToe(files: any[]): void {
    if (files && files.length > 0) {
      
      let pdf = new Blob([files[0]], {type: "application/pdf"});

      var reader = new FileReader();
      var bytes = new Array<number>();
      reader.readAsArrayBuffer(pdf);
      reader.onload = function() {
        let arrayBuffer = reader.result as ArrayBuffer;
        var byteArray = new Uint8Array(arrayBuffer);

        for (var i = 0; i < byteArray.length; i++) {
          bytes.push(byteArray[i]);
        }
      }
      this.resultaatDTO.documentBytes = bytes;
    }
  }

  resultaatOpslaan(resultaatDTO: UitwerkingDTO): void {
    resultaatDTO.type = UitwerkingType.ASSESSMENTRESULTAAT;

    this.uitwerkingservice.maakAssessmentResultaat(this.student.id, this.assessment.id, resultaatDTO).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-resultaten/' + this.traject_id);
    });
  }
}
