import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectfaseTabelComponent } from './trajectfase-tabel.component';

describe('TrajectfaseTabelComponent', () => {
  let component: TrajectfaseTabelComponent;
  let fixture: ComponentFixture<TrajectfaseTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectfaseTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectfaseTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
