import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminBeheerAssessmentsComponent } from './admin-beheer-assessments.component';

describe('AdminBeheerAssessmentsComponent', () => {
  let component: AdminBeheerAssessmentsComponent;
  let fixture: ComponentFixture<AdminBeheerAssessmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerAssessmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
