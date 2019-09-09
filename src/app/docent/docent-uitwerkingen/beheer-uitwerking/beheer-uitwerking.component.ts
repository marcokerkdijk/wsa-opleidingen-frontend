import { Component, OnInit } from '@angular/core';
import { Uitwerking } from 'src/app/Objecten/uitwerking';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-beheer-uitwerking',
  templateUrl: './beheer-uitwerking.component.html',
  styleUrls: ['./beheer-uitwerking.component.scss']
})
export class BeheerUitwerkingComponent implements OnInit {
  uitwerking: Uitwerking = new Uitwerking();
  student: Gebruiker = new Gebruiker();

  constructor(private dataservice: DataserviceService, private uitwerkingservice: UitwerkingService,
              private router: Router, ) { }

  ngOnInit() {
    this.haalUitwerkingOp();
    this.markeerAlsGelezen();
  }

  haalUitwerkingOp(): void {
    this.uitwerking = this.dataservice.getUitwerking();
    this.student = this.dataservice.getGebruiker();
  }

  markeerAlsGelezen(): void {
    this.uitwerking.gelezen = true;
    this.uitwerkingservice.wijzigUitwerking(this.student.id, this.uitwerking).subscribe();
  }

  opmerkingOpslaan(uitwerking: Uitwerking): void {
    this.uitwerkingservice.wijzigUitwerking(this.student.id ,uitwerking)
        .subscribe(response => this.router.navigateByUrl('docent/docent-traject/uitwerkingen-lijst/' + this.student.id));
  }
}
