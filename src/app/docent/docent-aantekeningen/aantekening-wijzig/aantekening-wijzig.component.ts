import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'wsa-aantekening-wijzig',
  templateUrl: './aantekening-wijzig.component.html',
  styleUrls: ['./aantekening-wijzig.component.scss']
})
export class AantekeningWijzigComponent implements OnInit {
  aantekening: Aantekening = new Aantekening;

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
    this.aantekening = this.dataservice.getAantekening();
  }

}
