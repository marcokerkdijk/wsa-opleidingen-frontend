import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BeheerTrajectComponent } from './beheer-traject.component';

describe('BeheerTrajectComponent', () => {
  let component: BeheerTrajectComponent;
  let fixture: ComponentFixture<BeheerTrajectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerTrajectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerTrajectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
