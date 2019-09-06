import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectWijzigenComponent } from './traject-wijzigen.component';

describe('TrajectWijzigenComponent', () => {
  let component: TrajectWijzigenComponent;
  let fixture: ComponentFixture<TrajectWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
