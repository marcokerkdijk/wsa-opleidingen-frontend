import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeheerAssessmentsComponent } from './beheer-assessments.component';

describe('BeheerAssessmentsComponent', () => {
  let component: BeheerAssessmentsComponent;
  let fixture: ComponentFixture<BeheerAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
