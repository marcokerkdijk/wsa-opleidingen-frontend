import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterBeheerSelectiefaseComponent } from './recruiter-beheer-selectiefase.component';

describe('RecruiterBeheerSelectiefaseComponent', () => {
  let component: RecruiterBeheerSelectiefaseComponent;
  let fixture: ComponentFixture<RecruiterBeheerSelectiefaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerSelectiefaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerSelectiefaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
