import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wsa-aantekening-aanmaak',
  templateUrl: './aantekening-aanmaak.component.html',
  styleUrls: ['./aantekening-aanmaak.component.scss']
})
export class AantekeningAanmaakComponent implements OnInit {
  traject_id: number;
  aantekening: Aantekening = new Aantekening;

  constructor(private aantekeningservice: AantekeningserviceService, private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.paramMap.get('id');
    this.traject_id = id;
  }

  aantekeningOpslaan(aantekening: Aantekening): void {
    this.aantekeningservice.aantekeningOpslaan(aantekening, this.traject_id)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('/docent/docent-traject/docent-aantekeningen');
        }));
  }
}
