import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GebruikersModalComponent } from './gebruikers-modal.component';

describe('GebruikersModalComponent', () => {
  let component: GebruikersModalComponent;
  let fixture: ComponentFixture<GebruikersModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GebruikersModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GebruikersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
