import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerResultatenComponent } from './beheer-resultaten.component';

describe('BeheerResultatenComponent', () => {
  let component: BeheerResultatenComponent;
  let fixture: ComponentFixture<BeheerResultatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerResultatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerResultatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
