import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerKoppelTabelComponent } from './gebruiker-koppel-tabel.component';

describe('GebruikerKoppelTabelComponent', () => {
  let component: GebruikerKoppelTabelComponent;
  let fixture: ComponentFixture<GebruikerKoppelTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerKoppelTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerKoppelTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
