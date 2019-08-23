import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrachtComponent } from './opdracht.component';

describe('OpdrachtComponent', () => {
  let component: OpdrachtComponent;
  let fixture: ComponentFixture<OpdrachtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdrachtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdrachtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
