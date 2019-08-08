import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerSelectiefaseComponent } from './beheer-selectiefase.component';

describe('BeheerSelectiefaseComponent', () => {
  let component: BeheerSelectiefaseComponent;
  let fixture: ComponentFixture<BeheerSelectiefaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerSelectiefaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerSelectiefaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
