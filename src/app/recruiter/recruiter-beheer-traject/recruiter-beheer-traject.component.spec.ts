import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterBeheerTrajectComponent } from './recruiter-beheer-traject.component';

describe('RecruiterBeheerTrajectComponent', () => {
  let component: RecruiterBeheerTrajectComponent;
  let fixture: ComponentFixture<RecruiterBeheerTrajectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerTrajectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerTrajectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});