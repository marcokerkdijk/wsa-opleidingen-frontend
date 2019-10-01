import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatWijzigenComponent } from './resultaat-wijzigen.component';

describe('ResultaatWijzigenComponent', () => {
  let component: ResultaatWijzigenComponent;
  let fixture: ComponentFixture<ResultaatWijzigenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaatWijzigenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaatWijzigenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
