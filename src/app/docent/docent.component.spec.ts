import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentComponent } from './docent.component';

describe('DocentComponent', () => {
  let component: DocentComponent;
  let fixture: ComponentFixture<DocentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
