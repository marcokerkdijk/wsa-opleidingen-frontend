import { Component, OnInit } from '@angular/core';
import { Traject } from 'src/app/Objecten/traject';
import { ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { UitwerkingService } from 'src/app/services/uitwerking.service';

@Component({
  selector: 'wsa-beheer-resultaten',
  templateUrl: './beheer-resultaten.component.html',
  styleUrls: ['./beheer-resultaten.component.scss']
})
export class BeheerResultatenComponent implements OnInit {
  traject: Traject = new Traject;
  uitwerkingenlijst: Uitwerking[] = new Array;

  constructor(private activeRouter: ActivatedRoute, private trajectService:TrajectService, 
              private uitwerkingService:UitwerkingService) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.haalTrajectOp(id);
    this.haalUitwerkingenOp();
  }

  haalTrajectOp(traject_id) {
    this.trajectService.haalTrajectOpId(traject_id).subscribe(opgehaaldTraject => this.traject = opgehaaldTraject);
  }

  haalUitwerkingenOp(): void {
    this.uitwerkingService.geefAlleUitwerkingen()
        .subscribe(uitwerkingenlijst => this.uitwerkingenlijst = uitwerkingenlijst);
  }
}
