import { Component, OnInit } from '@angular/core';
import { TekstObject } from 'src/app/Objecten/tekst-object';
import { TekstobjectService } from 'src/app/services/tekstobject.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'wsa-tekstobject-wijzigen',
  templateUrl: './tekstobject-wijzigen.component.html',
  styleUrls: ['./tekstobject-wijzigen.component.scss']
})
export class TekstobjectWijzigenComponent implements OnInit {
  tekstObject: TekstObject = new TekstObject;

  constructor(private tekstobjectservice: TekstobjectService, private activeRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const id = +this.activeRouter.snapshot.paramMap.get('id');
    this.getTekstObject(id);
  }

  getTekstObject(tekstObject_id: number) {
    this.tekstobjectservice.haalTekstObjectOpId(tekstObject_id).subscribe(opgehaaldTekstObject => this.tekstObject = opgehaaldTekstObject);
  }

  tekstObjectOpslaan(tekstObject: TekstObject) {
    this.tekstobjectservice.wijzigTekstObject(tekstObject).subscribe(response => {
      this.router.navigateByUrl('admin/beheer-tekstobjecten');
    });
  }
}
