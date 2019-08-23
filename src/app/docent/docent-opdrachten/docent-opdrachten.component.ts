import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { OpdrachtService } from 'src/app/services/opdracht.service';

@Component({
  selector: 'wsa-docent-opdrachten',
  templateUrl: './docent-opdrachten.component.html',
  styleUrls: ['./docent-opdrachten.component.scss']
})
export class DocentOpdrachtenComponent implements OnInit {
  traject_id: number;
  opdrachten: Opdracht[] = new Array;

  constructor(private dataservice: DataserviceService, private opdrachtService: OpdrachtService) { }

  ngOnInit() {
    this.krijgTrajectId();
    this.krijgOpdrachtenVanTraject();
  }

  krijgTrajectId(): void {
    this.traject_id = this.dataservice.getTraject_id();
  }

  krijgOpdrachtenVanTraject(): void {
    this.opdrachtService.geefAlleOpdrachtenVanTraject(this.traject_id)
        .subscribe(opdrachtlijst => this.opdrachten = opdrachtlijst);
  }
}
