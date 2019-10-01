import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { AlertService } from 'src/app/_alert';

@Component({
  selector: 'wsa-opdrachten',
  templateUrl: './opdrachten.component.html',
  styleUrls: ['./opdrachten.component.scss']
})
export class OpdrachtenComponent implements OnInit {
  opdrachten: Opdracht[];
  traject_id: number;

  constructor(private opdrachtService: OpdrachtService, private dataservice: DataserviceService,
              private alertservice: AlertService) { }

  ngOnInit() {
    this.haalTrajectIdOp();
    this.haalOpdrachtenOp();
  }

  haalTrajectIdOp(): void {
    this.traject_id = this.dataservice.getTraject_id();
  }

  haalOpdrachtenOp(): void {
    this.opdrachtService.geefZichtbareOpdrachtenVanTraject(this.traject_id).subscribe(opdrachtenlijst => {
      this.opdrachten = opdrachtenlijst;
    },
    (error) => {
      this.alertservice.error("Er zijn nog geen opdrachten beschikbaar.", "alert-1");
    });
  }
}
