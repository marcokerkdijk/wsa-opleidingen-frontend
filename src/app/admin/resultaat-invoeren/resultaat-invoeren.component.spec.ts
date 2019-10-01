import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaatInvoerenComponent } from './resultaat-invoeren.component';

describe('ResultaatInvoerenComponent', () => {
  let component: ResultaatInvoerenComponent;
  let fixture: ComponentFixture<ResultaatInvoerenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaatInvoerenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaatInvoerenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
