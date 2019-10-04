import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeheerTekstobjectenComponent } from './beheer-tekstobjecten.component';

describe('AdminBeheerTekstobjectenComponent', () => {
  let component: AdminBeheerTekstobjectenComponent;
  let fixture: ComponentFixture<AdminBeheerTekstobjectenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerTekstobjectenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerTekstobjectenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
