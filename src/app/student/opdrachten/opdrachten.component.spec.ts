import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrachtenComponent } from './opdrachten.component';

describe('OpdrachtenComponent', () => {
  let component: OpdrachtenComponent;
  let fixture: ComponentFixture<OpdrachtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdrachtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdrachtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
