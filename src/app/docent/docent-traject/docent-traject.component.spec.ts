import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentTrajectComponent } from './docent-traject.component';

describe('DocentTrajectComponent', () => {
  let component: DocentTrajectComponent;
  let fixture: ComponentFixture<DocentTrajectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentTrajectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentTrajectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
