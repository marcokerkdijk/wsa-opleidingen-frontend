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
import { UitwerkingDTO } from 'src/app/Objecten/uitwerking-dto';

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
  resultaatDTO: UitwerkingDTO = new UitwerkingDTO;
  huidigeGebruiker: Gebruiker = new Gebruiker;
  huidigeOpdracht: Opdracht = new Opdracht;

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
    this.uitwerkingservice.geefAssessmentResultaat(uitwerking_id).subscribe(uitwerkingDTO => {
      this.resultaatDTO = uitwerkingDTO;
      this.huidigeGebruiker = uitwerkingDTO.gebruiker;
      this.huidigeOpdracht = uitwerkingDTO.opdracht;
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

  downloadPdf(resultaatDTO: UitwerkingDTO): void {
    let newPdfWindow = window.open("","Print");

    let content = encodeURIComponent(resultaatDTO.byteString);
    
    let iframeStart = "<\iframe width='100%' height='100%' src='data:application/pdf;base64, ";
    
    let iframeEnd = "'><\/iframe>";
    
    newPdfWindow.document.write(iframeStart + content + iframeEnd);
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

  resultaatWijzigen(resultaatDTO: UitwerkingDTO): void {
    this.uitwerkingservice.wijzigUitwerking(this.huidigeGebruiker.id, resultaatDTO).subscribe(response => {
      this.router.navigateByUrl(this.rolIngelogdeGebruiker + '/beheer-resultaten/' + this.traject_id);
    });
  }
}
