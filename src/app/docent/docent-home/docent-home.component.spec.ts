import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentHomeComponent } from './docent-home.component';

describe('DocentHomeComponent', () => {
  let component: DocentHomeComponent;
  let fixture: ComponentFixture<DocentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
