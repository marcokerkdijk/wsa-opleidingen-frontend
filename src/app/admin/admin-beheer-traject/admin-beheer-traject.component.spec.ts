import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeheerTrajectComponent } from './admin-beheer-traject.component';

describe('AdminBeheerTrajectComponent', () => {
  let component: AdminBeheerTrajectComponent;
  let fixture: ComponentFixture<AdminBeheerTrajectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerTrajectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerTrajectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
