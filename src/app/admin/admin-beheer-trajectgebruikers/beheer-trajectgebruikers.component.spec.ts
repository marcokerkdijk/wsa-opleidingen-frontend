import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerTrajectgebruikersComponent } from './beheer-trajectgebruikers.component';

describe('BeheerTrajectgebruikersComponent', () => {
  let component: BeheerTrajectgebruikersComponent;
  let fixture: ComponentFixture<BeheerTrajectgebruikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerTrajectgebruikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerTrajectgebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
