import { Component, OnInit } from '@angular/core';
import { Aantekening } from 'src/app/Objecten/aantekening';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { AantekeningserviceService } from 'src/app/services/aantekeningservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-aantekening-wijzig',
  templateUrl: './aantekening-wijzig.component.html',
  styleUrls: ['./aantekening-wijzig.component.scss']
})
export class AantekeningWijzigComponent implements OnInit {
  aantekening: Aantekening = new Aantekening;

  constructor(private dataservice: DataserviceService, private aantekeningservice: AantekeningserviceService,
              private router: Router) { }

  ngOnInit() {
    this.aantekening = this.dataservice.getAantekening();
  }

  wijzigAantekening(aantekening: Aantekening): void {
    this.aantekeningservice.aantekeningWijzigen(aantekening).subscribe(response => {
      this.router.navigateByUrl('docent/docent-traject/docent-aantekeningen');
    });
  }
}
