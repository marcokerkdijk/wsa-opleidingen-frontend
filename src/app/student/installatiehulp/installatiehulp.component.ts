import { Component, OnInit } from '@angular/core';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';

@Component({
  selector: 'wsa-installatiehulp',
  templateUrl: './installatiehulp.component.html',
  styleUrls: ['./installatiehulp.component.scss']
})
export class InstallatiehulpComponent implements OnInit {
  tekstObject: TekstObject = new TekstObject();

  constructor(private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.getTekstObject(4);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }
}