import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterBeheerTrajectfaseComponent } from './recruiter-beheer-trajectfase.component';

describe('RecruiterBeheerTrajectfaseComponent', () => {
  let component: RecruiterBeheerTrajectfaseComponent;
  let fixture: ComponentFixture<RecruiterBeheerTrajectfaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerTrajectfaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerTrajectfaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
