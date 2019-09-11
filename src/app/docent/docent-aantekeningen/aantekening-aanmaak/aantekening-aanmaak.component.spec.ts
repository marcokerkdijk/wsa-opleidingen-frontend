import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AantekeningAanmaakComponent } from './aantekening-aanmaak.component';

describe('AantekeningAanmaakComponent', () => {
  let component: AantekeningAanmaakComponent;
  let fixture: ComponentFixture<AantekeningAanmaakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AantekeningAanmaakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AantekeningAanmaakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
