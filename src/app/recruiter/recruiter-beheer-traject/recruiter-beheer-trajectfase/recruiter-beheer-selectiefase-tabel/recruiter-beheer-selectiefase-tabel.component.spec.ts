import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterBeheerSelectiefaseTabelComponent } from './recruiter-beheer-selectiefase-tabel.component';

describe('RecruiterBeheerSelectiefaseTabelComponent', () => {
  let component: RecruiterBeheerSelectiefaseTabelComponent;
  let fixture: ComponentFixture<RecruiterBeheerSelectiefaseTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerSelectiefaseTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerSelectiefaseTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
