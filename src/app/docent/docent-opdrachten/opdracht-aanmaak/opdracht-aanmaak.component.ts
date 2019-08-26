import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { ActivatedRoute, Router } from '@angular/router';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { OpdrachtType } from 'src/app/model/opdracht-type.enum';

@Component({
  selector: 'wsa-opdracht-aanmaak',
  templateUrl: './opdracht-aanmaak.component.html',
  styleUrls: ['./opdracht-aanmaak.component.scss']
})
export class OpdrachtAanmaakComponent implements OnInit {
  traject_id: Number;
  opdracht: Opdracht = new Opdracht;

  constructor(private activeRoute: ActivatedRoute, private opdrachtservice: OpdrachtService,
              private router: Router,) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.traject_id = id;
  }

  opdrachtOpslaan(opdracht: Opdracht): void {
    opdracht.type = OpdrachtType.OPDRACHT;
    console.log(this.traject_id);
    this.opdrachtservice.maakOpdrachtAan(this.traject_id, opdracht)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('/docent/docent-traject/docent-opdrachten');
        }));
  }
}
