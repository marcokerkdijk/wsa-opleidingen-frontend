import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikersTabelComponent } from './gebruikers-tabel.component';

describe('GebruikersTabelComponent', () => {
  let component: GebruikersTabelComponent;
  let fixture: ComponentFixture<GebruikersTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikersTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikersTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
