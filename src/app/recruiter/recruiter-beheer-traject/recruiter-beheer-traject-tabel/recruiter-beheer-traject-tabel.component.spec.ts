import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterBeheerTrajectTabelComponent } from './recruiter-beheer-traject-tabel.component';

describe('RecruiterBeheerTrajectTabelComponent', () => {
  let component: RecruiterBeheerTrajectTabelComponent;
  let fixture: ComponentFixture<RecruiterBeheerTrajectTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerTrajectTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerTrajectTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
