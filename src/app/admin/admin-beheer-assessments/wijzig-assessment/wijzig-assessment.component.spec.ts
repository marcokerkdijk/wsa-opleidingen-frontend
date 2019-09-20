import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijzigAssessmentComponent } from './wijzig-assessment.component';

describe('WijzigAssessmentComponent', () => {
  let component: WijzigAssessmentComponent;
  let fixture: ComponentFixture<WijzigAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijzigAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijzigAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
