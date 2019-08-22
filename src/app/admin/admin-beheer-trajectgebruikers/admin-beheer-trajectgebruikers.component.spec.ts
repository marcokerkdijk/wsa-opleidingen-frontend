import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeheerTrajectgebruikersComponent } from './admin-beheer-trajectgebruikers.component';

describe('AdminBeheerTrajectgebruikersComponent', () => {
  let component: AdminBeheerTrajectgebruikersComponent;
  let fixture: ComponentFixture<AdminBeheerTrajectgebruikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerTrajectgebruikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerTrajectgebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
