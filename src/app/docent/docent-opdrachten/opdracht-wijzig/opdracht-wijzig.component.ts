import { Component, OnInit } from '@angular/core';
import { Opdracht } from 'src/app/Objecten/opdracht';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { OpdrachtService } from 'src/app/services/opdracht.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-opdracht-wijzig',
  templateUrl: './opdracht-wijzig.component.html',
  styleUrls: ['./opdracht-wijzig.component.scss']
})
export class OpdrachtWijzigComponent implements OnInit {
  opdracht: Opdracht = new Opdracht;

  constructor(private dataservice: DataserviceService, private opdrachtservice: OpdrachtService,
              private router: Router) { }

  ngOnInit() {
    this.krijgOpdracht();
  }

  krijgOpdracht(): void {
    this.opdracht = this.dataservice.getOpdracht();
  }

  opdrachtOpslaan(opdracht: Opdracht): void {
    this.opdrachtservice.wijzigOpdracht(opdracht)
        .subscribe(response => this.router.navigateByUrl('/docent/docent-traject').then(success => {
          this.router.navigateByUrl('/docent/docent-traject/docent-opdrachten');
        }));
  }
}
