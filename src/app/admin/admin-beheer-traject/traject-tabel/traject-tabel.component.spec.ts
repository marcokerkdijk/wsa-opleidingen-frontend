import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TrajectTabelComponent } from './traject-tabel.component';

describe('TrajectTabelComponent', () => {
  let component: TrajectTabelComponent;
  let fixture: ComponentFixture<TrajectTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});