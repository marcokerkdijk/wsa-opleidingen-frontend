import { Component, OnInit } from '@angular/core';
import { TekstobjectService } from 'src/app/services/tekstobject.service';
import { TekstObject } from 'src/app/Objecten/tekst-object';

@Component({
  selector: 'wsa-beheer-tekstobjecten',
  templateUrl: './beheer-tekstobjecten.component.html',
  styleUrls: ['./beheer-tekstobjecten.component.scss']
})
export class AdminBeheerTekstobjectenComponent implements OnInit {
  alleTekstObjecten: TekstObject[];

  constructor(private tekstobjectservice: TekstobjectService, ) { }

  ngOnInit() {
    this.getAlleTekstObjecten();
  }

  getAlleTekstObjecten(): void {
    this.tekstobjectservice.GeefAlleTekstObjecten().subscribe(alleTekstObjecten => {
      this.alleTekstObjecten = alleTekstObjecten;
    });
  }

}
