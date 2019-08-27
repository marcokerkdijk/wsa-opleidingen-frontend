import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPerRolComponent } from './navbar-per-rol.component';

describe('NavbarPerRolComponent', () => {
  let component: NavbarPerRolComponent;
  let fixture: ComponentFixture<NavbarPerRolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPerRolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPerRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
