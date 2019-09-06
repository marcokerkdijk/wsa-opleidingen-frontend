import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectToevoegenComponent } from './traject-toevoegen.component';

describe('TrajectToevoegenComponent', () => {
  let component: TrajectToevoegenComponent;
  let fixture: ComponentFixture<TrajectToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
