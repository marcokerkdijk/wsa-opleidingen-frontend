import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfielComponent } from './profiel.component';

describe('ProfielComponent', () => {
  let component: ProfielComponent;
  let fixture: ComponentFixture<ProfielComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfielComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
