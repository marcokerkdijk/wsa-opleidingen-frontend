import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerUitwerkingComponent } from './beheer-uitwerking.component';

describe('BeheerUitwerkingComponent', () => {
  let component: BeheerUitwerkingComponent;
  let fixture: ComponentFixture<BeheerUitwerkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerUitwerkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerUitwerkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
