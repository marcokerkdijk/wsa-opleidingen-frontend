import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaakAssessmentComponent } from './maak-assessment.component';

describe('MaakAssessmentComponent', () => {
  let component: MaakAssessmentComponent;
  let fixture: ComponentFixture<MaakAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaakAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaakAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
