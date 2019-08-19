import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikersKoppelenTrajectenComponent } from './gebruikers-koppelen-trajecten.component';

describe('GebruikersKoppelenTrajectenComponent', () => {
  let component: GebruikersKoppelenTrajectenComponent;
  let fixture: ComponentFixture<GebruikersKoppelenTrajectenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikersKoppelenTrajectenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikersKoppelenTrajectenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
