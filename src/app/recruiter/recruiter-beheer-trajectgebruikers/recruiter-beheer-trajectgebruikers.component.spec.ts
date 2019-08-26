import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterBeheerTrajectgebruikersComponent } from './recruiter-beheer-trajectgebruikers.component';

describe('RecruiterBeheerTrajectgebruikersComponent', () => {
  let component: RecruiterBeheerTrajectgebruikersComponent;
  let fixture: ComponentFixture<RecruiterBeheerTrajectgebruikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerTrajectgebruikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerTrajectgebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
