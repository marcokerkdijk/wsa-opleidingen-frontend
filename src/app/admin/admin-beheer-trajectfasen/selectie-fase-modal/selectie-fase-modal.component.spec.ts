import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectieFaseModalComponent } from './selectie-fase-modal.component';

describe('SelectieFaseModalComponent', () => {
  let component: SelectieFaseModalComponent;
  let fixture: ComponentFixture<SelectieFaseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectieFaseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectieFaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
