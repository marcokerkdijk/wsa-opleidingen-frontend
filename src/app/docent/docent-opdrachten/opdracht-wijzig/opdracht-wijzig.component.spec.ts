import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrachtWijzigComponent } from './opdracht-wijzig.component';

describe('OpdrachtWijzigComponent', () => {
  let component: OpdrachtWijzigComponent;
  let fixture: ComponentFixture<OpdrachtWijzigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdrachtWijzigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdrachtWijzigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
