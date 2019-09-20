import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { AlertService } from 'src/app/_alert';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-assessment-tabel',
  templateUrl: './assessment-tabel.component.html',
  styleUrls: ['./assessment-tabel.component.scss']
})
export class AssessmentTabelComponent implements OnInit {
  assessments: Opdracht[] = new Array;
  zichtbaar: boolean[] = new Array;
  toonOmschrijving: boolean[] = new Array;

  constructor(private opdrachtService: OpdrachtService, private alertservice: AlertService, private router: Router) { }

  ngOnInit() {
    this.haalAssessmentsOp();
  }

  haalAssessmentsOp() {
    this.opdrachtService.haalAlleAssessments().subscribe(alleAssessments => {
      this.assessments = alleAssessments;
    },
    (error) => {
      this.alertservice.error("Er zijn nog geen assessments aangemaakt.", "alert-1");
    });
  }

  maakBooleanLijst(): void {
    this.zichtbaar.concat(false);
    this.toonOmschrijving.concat(false);
  }

  toggle(index: number): void {
    this.zichtbaar[index] = !this.zichtbaar[index];
  }

  toggleOmschrijving(index: number): void {
    this.toonOmschrijving[index] = !this.toonOmschrijving[index];
  }

  verwijderAssessment(assessment: Opdracht): void {
    this.opdrachtService.verwijderOpdracht(assessment)
    .subscribe(response => this.router.navigateByUrl('/admin').then(success => {
      this.router.navigateByUrl('admin/beheer-assessments');
      })
    );
  }
}
