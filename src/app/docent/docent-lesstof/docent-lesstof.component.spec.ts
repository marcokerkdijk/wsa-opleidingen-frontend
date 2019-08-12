import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentLesstofComponent } from './docent-lesstof.component';

describe('DocentLesstofComponent', () => {
  let component: DocentLesstofComponent;
  let fixture: ComponentFixture<DocentLesstofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentLesstofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentLesstofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
