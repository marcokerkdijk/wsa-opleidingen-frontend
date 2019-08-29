import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AssessmentTabelComponent } from './assessment-tabel.component';

describe('AssessmentTabelComponent', () => {
  let component: AssessmentTabelComponent;
  let fixture: ComponentFixture<AssessmentTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
