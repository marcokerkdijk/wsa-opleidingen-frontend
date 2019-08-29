import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecruiterBeheerOpleidingsfaseTabelComponent } from './recruiter-beheer-opleidingsfase-tabel.component';

describe('RecruiterBeheerOpleidingsfaseTabelComponent', () => {
  let component: RecruiterBeheerOpleidingsfaseTabelComponent;
  let fixture: ComponentFixture<RecruiterBeheerOpleidingsfaseTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterBeheerOpleidingsfaseTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterBeheerOpleidingsfaseTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
