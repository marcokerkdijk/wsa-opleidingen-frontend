import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AantekeningWijzigComponent } from './aantekening-wijzig.component';

describe('AantekeningWijzigComponent', () => {
  let component: AantekeningWijzigComponent;
  let fixture: ComponentFixture<AantekeningWijzigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AantekeningWijzigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AantekeningWijzigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
