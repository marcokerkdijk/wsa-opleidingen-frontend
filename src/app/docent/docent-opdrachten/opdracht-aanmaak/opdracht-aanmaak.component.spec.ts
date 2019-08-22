import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdrachtAanmaakComponent } from './opdracht-aanmaak.component';

describe('OpdrachtAanmaakComponent', () => {
  let component: OpdrachtAanmaakComponent;
  let fixture: ComponentFixture<OpdrachtAanmaakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpdrachtAanmaakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdrachtAanmaakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
