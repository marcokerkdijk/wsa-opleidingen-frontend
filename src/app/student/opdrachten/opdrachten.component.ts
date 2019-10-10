import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { ActivatedRoute } from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { AlertService } from 'src/app/_alert';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-opdrachten',
  templateUrl: './opdrachten.component.html',
  styleUrls: ['./opdrachten.component.scss']
})
export class OpdrachtenComponent implements OnInit {
  opdrachten: Opdracht[];
  traject_id: number;
  tekstObject: TekstObject = new TekstObject();

  constructor(private opdrachtService: OpdrachtService, private dataservice: DataserviceService,
    private alertservice: AlertService, private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.haalTrajectIdOp();
    this.haalOpdrachtenOp();
    this.getTekstObject(6);
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

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}