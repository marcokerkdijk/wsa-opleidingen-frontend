import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TekstobjectWijzigenComponent } from './tekstobject-wijzigen.component';

describe('TekstobjectWijzigenComponent', () => {
  let component: TekstobjectWijzigenComponent;
  let fixture: ComponentFixture<TekstobjectWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekstobjectWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekstobjectWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
