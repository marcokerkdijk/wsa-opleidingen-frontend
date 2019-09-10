import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TrajectService } from 'src/app/services/traject.service';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';

@Component({
  selector: 'wsa-opdracht-wijzig',
  templateUrl: './opdracht-wijzig.component.html',
  styleUrls: ['./opdracht-wijzig.component.scss']
})
export class OpdrachtWijzigComponent implements OnInit {
  traject_id: number;
  opdracht: Opdracht = new Opdracht;
  trajectonderdelen: TrajectOnderdeel[] = new Array;

  constructor(private dataservice: DataserviceService, private opdrachtservice: OpdrachtService,
              private router: Router, private trajectservice: TrajectService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.traject_id = id;
    this.krijgOpdracht();
    this.haalTrajectonderdelenOp();
  }

  krijgOpdracht(): void {
    this.opdracht = this.dataservice.getOpdracht();
  }

  haalTrajectonderdelenOp(): void {
    this.trajectservice.geefAlleTrajectonderdelenVanTraject(this.traject_id).subscribe(trajectonderdelen => {
      this.trajectonderdelen = trajectonderdelen;
    });
  }

  opdrachtOpslaan(opdracht: Opdracht): void {
    this.opdrachtservice.wijzigOpdracht(opdracht)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('/docent/docent-traject/docent-opdrachten');
        }));
  }
}