import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterBeheerOpleidingsfaseComponent } from './recruiter-beheer-opleidingsfase.component';

describe('RecruiterBeheerOpleidingsfaseComponent', () => {
  let component: RecruiterBeheerOpleidingsfaseComponent;
  let fixture: ComponentFixture<RecruiterBeheerOpleidingsfaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerOpleidingsfaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerOpleidingsfaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
