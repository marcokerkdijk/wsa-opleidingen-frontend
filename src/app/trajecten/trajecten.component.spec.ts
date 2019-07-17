import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrajectenComponent } from './trajecten.component';

describe('TrajectenComponent', () => {
  let component: TrajectenComponent;
  let fixture: ComponentFixture<TrajectenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrajectenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrajectenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
