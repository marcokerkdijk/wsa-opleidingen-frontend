import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DocentOpdrachtenComponent } from './docent-opdrachten.component';

describe('DocentOpdrachtenComponent', () => {
  let component: DocentOpdrachtenComponent;
  let fixture: ComponentFixture<DocentOpdrachtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentOpdrachtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentOpdrachtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
