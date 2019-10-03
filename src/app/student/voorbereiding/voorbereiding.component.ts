import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TekstobjectService } from 'src/app/services/tekstobject.service';
import { TekstObject } from 'src/app/Objecten/tekst-object';

@Component({
  selector: 'wsa-voorbereiding',
  templateUrl: './voorbereiding.component.html',
  styleUrls: ['./voorbereiding.component.scss']
})
export class VoorbereidingComponent implements OnInit {
  tekstObject: TekstObject = new TekstObject();

  constructor(private router: Router, private tekstobjectservice: TekstobjectService) { }

  ngOnInit() {
    this.getTekstObject(6);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }

}
