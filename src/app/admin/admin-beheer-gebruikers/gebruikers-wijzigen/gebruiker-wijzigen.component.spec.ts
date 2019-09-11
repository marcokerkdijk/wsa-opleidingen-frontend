import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerWijzigenComponent } from './gebruiker-wijzigen.component';

describe('GebruikerWijzigenComponent', () => {
  let component: GebruikerWijzigenComponent;
  let fixture: ComponentFixture<GebruikerWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
