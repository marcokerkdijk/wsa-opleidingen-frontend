import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';

@Component({
  selector: 'wsa-assessment-tabel',
  templateUrl: './assessment-tabel.component.html',
  styleUrls: ['./assessment-tabel.component.scss']
})
export class AssessmentTabelComponent implements OnInit {
  alleAssessments: Opdracht[];

  constructor(private opdrachtService: OpdrachtService) { }

  ngOnInit() {
    this.getAlleAssessments();
  }

  getAlleAssessments() {
    this.opdrachtService.haalAlleAssessments()
    .subscribe(alleAssessments => this.alleAssessments = alleAssessments);
  }

  openToevoegModal(modalnaam: string) {
    console.log("LOL, hij doet nog niks. Moet nog geïmplementeerd worden.");
  }

}
