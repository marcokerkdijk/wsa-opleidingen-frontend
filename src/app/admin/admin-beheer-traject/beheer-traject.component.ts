import { Component, OnInit } from '@angular/core';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-beheer-traject',
  templateUrl: './beheer-traject.component.html',
  styleUrls: ['./beheer-traject.component.scss']
})
export class BeheerTrajectComponent implements OnInit {
  tekstObject: TekstObject = new TekstObject();

  constructor(private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.getTekstObject(10);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}
