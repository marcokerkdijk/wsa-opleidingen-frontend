import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
import { Gebruiker } from 'src/app/Objecten/gebruiker';
import { UitwerkingService } from 'src/app/services/uitwerking.service';
import { Router } from '@angular/router';
import { UitwerkingDTO } from 'src/app/Objecten/uitwerking-dto';
import { Opdracht } from 'src/app/Objecten/opdracht';

@Component({
  selector: 'wsa-beheer-uitwerking',
  templateUrl: './beheer-uitwerking.component.html',
  styleUrls: ['./beheer-uitwerking.component.scss']
})
export class BeheerUitwerkingComponent implements OnInit {
  student: Gebruiker = new Gebruiker();
  opdrachtUitwerking: UitwerkingDTO = new UitwerkingDTO();
  opdracht: Opdracht = new Opdracht;

  constructor(private dataservice: DataserviceService, private uitwerkingservice: UitwerkingService,
              private router: Router) { }

  ngOnInit() {
    this.haalUitwerkingOp();
    this.markeerAlsGelezen();
  }

  haalUitwerkingOp(): void {
    this.opdrachtUitwerking = this.dataservice.getUitwerkingDTO();
    this.student = this.dataservice.getGebruiker();
  }

  markeerAlsGelezen(): void {
    this.opdrachtUitwerking.gelezen = true;
    this.uitwerkingservice.wijzigUitwerking(this.student.id, this.opdrachtUitwerking).subscribe();
  }

  opmerkingOpslaan(): void {
    this.uitwerkingservice.wijzigUitwerking(this.student.id ,this.opdrachtUitwerking)
        .subscribe(response => this.router.navigateByUrl('docent/docent-traject/uitwerkingen-lijst/' + this.student.id));
  }
}