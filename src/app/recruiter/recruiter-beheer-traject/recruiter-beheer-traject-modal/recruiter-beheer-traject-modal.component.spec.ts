import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterBeheerTrajectModalComponent } from './recruiter-beheer-traject-modal.component';

describe('RecruiterBeheerTrajectModalComponent', () => {
  let component: RecruiterBeheerTrajectModalComponent;
  let fixture: ComponentFixture<RecruiterBeheerTrajectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerTrajectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerTrajectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
