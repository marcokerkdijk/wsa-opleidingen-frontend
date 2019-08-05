import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectiefaseTabelComponent } from './selectiefase-tabel.component';

describe('SelectiefaseTabelComponent', () => {
  let component: SelectiefaseTabelComponent;
  let fixture: ComponentFixture<SelectiefaseTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectiefaseTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectiefaseTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
