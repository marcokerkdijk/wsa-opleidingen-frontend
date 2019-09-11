import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { OpdrachtType } from 'src/app/model/opdracht-type.enum';
import { TrajectService } from 'src/app/services/traject.service';
import { TrajectOnderdeel } from 'src/app/Objecten/traject-onderdeel';

@Component({
  selector: 'wsa-opdracht-aanmaak',
  templateUrl: './opdracht-aanmaak.component.html',
  styleUrls: ['./opdracht-aanmaak.component.scss']
})
export class OpdrachtAanmaakComponent implements OnInit {
  traject_id: number;
  opdracht: Opdracht = new Opdracht;
  trajectonderdelen: TrajectOnderdeel[] = new Array;

  constructor(private activeRoute: ActivatedRoute, private opdrachtservice: OpdrachtService,
              private router: Router, private trajectservice: TrajectService) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.traject_id = id;
    this.haalTrajectonderdelenOp();
  }

  haalTrajectonderdelenOp(): void {
    this.trajectservice.geefAlleTrajectonderdelenVanTraject(this.traject_id).subscribe(trajectonderdelen => {
      this.trajectonderdelen = trajectonderdelen;
    });
  }

  opdrachtOpslaan(opdracht: Opdracht): void {
    opdracht.type = OpdrachtType.OPDRACHT;
    this.opdrachtservice.maakOpdrachtAan(opdracht)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('/docent/docent-traject/docent-opdrachten');
        }));
  }
}