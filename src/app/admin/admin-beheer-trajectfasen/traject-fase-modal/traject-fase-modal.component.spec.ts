import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectFaseModalComponent } from './traject-fase-modal.component';

describe('SelectieFaseModalComponent', () => {
  let component: TrajectFaseModalComponent;
  let fixture: ComponentFixture<TrajectFaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectFaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectFaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
