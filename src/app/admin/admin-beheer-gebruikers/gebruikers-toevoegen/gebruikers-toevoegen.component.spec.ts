import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GebruikersToevoegenComponent } from './gebruikers-toevoegen.component';

describe('GebruikersToevoegenComponent', () => {
  let component: GebruikersToevoegenComponent;
  let fixture: ComponentFixture<GebruikersToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikersToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikersToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});