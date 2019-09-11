import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentAantekeningenComponent } from './docent-aantekeningen.component';

describe('DocentAantekeningenComponent', () => {
  let component: DocentAantekeningenComponent;
  let fixture: ComponentFixture<DocentAantekeningenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentAantekeningenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentAantekeningenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
