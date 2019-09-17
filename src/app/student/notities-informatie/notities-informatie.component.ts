import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { ActivatedRoute } from '@angular/router';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';

@Component({
  selector: 'wsa-notities-informatie',
  templateUrl: './notities-informatie.component.html',
  styleUrls: ['./notities-informatie.component.scss']
})
export class NotitiesInformatieComponent implements OnInit {
  aantekening: Aantekening = new Aantekening;

  constructor(
    private route: ActivatedRoute,
    private aantekeningService: AantekeningserviceService,
    
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.haalAantekeningOp(id);
  }

  haalAantekeningOp(id: number){
    this.aantekeningService.getAantekeningOpId(id).subscribe(
      aantekening => this.aantekening = aantekening);
  }

}
