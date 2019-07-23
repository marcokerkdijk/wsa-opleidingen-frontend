import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectModalComponent } from './traject-modal.component';

describe('TrajectModalComponent', () => {
  let component: TrajectModalComponent;
  let fixture: ComponentFixture<TrajectModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
