import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterBeheerTrajectfaseModalComponent } from './recruiter-beheer-trajectfase-modal.component';

describe('RecruiterBeheerTrajectfaseModalComponent', () => {
  let component: RecruiterBeheerTrajectfaseModalComponent;
  let fixture: ComponentFixture<RecruiterBeheerTrajectfaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerTrajectfaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerTrajectfaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
