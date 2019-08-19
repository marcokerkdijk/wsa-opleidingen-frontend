import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikerKoppelModalComponent } from './gebruiker-koppel-modal.component';

describe('GebruikerKoppelModalComponent', () => {
  let component: GebruikerKoppelModalComponent;
  let fixture: ComponentFixture<GebruikerKoppelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikerKoppelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikerKoppelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
