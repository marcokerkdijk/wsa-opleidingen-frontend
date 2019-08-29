import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtenserviceService } from 'src/app/services/opdrachtenservice.service';
import { AdminBeheerAssessmentsComponent } from '../admin-beheer-assessments.component';

@Component({
  selector: 'wsa-assessment-tabel',
  templateUrl: './assessment-tabel.component.html',
  styleUrls: ['./assessment-tabel.component.scss']
})
export class AssessmentTabelComponent implements OnInit {
  alleAssessments: Opdracht[];

  constructor(
    private opdrachtenService: OpdrachtenserviceService,
    private adminBeheerAssessmentsComponent: AdminBeheerAssessmentsComponent,
  ) { }

  ngOnInit() {
    this.getAlleAssessments();
  }

  getAlleAssessments() {
    this.opdrachtenService.haalAlleAssessments()
    .subscribe(alleAssessments => this.alleAssessments = alleAssessments);
  }

  openToevoegModal(modalnaam: string) {
    console.log("LOL, hij doet nog niks. Moet nog geïmplementeerd worden.");
  }

}
