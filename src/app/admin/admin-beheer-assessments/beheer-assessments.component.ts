import { Component, OnInit } from '@angular/core';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-beheer-assessments',
  templateUrl: './beheer-assessments.component.html',
  styleUrls: ['./beheer-assessments.component.scss']
})
export class BeheerAssessmentsComponent implements OnInit {
  tekstObject: TekstObject = new TekstObject();

  constructor(private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.getTekstObject(16);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}
