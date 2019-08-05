import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeheerTrajectfasenComponent } from './admin-beheer-trajectfasen.component';

describe('AdminBeheerTrajectfasenComponent', () => {
  let component: AdminBeheerTrajectfasenComponent;
  let fixture: ComponentFixture<AdminBeheerTrajectfasenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerTrajectfasenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerTrajectfasenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
