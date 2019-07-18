import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMaakTrajectComponent } from './admin-maak-traject.component';

describe('AdminMaakTrajectComponent', () => {
  let component: AdminMaakTrajectComponent;
  let fixture: ComponentFixture<AdminMaakTrajectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMaakTrajectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMaakTrajectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
