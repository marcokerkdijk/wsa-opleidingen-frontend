import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPerrolComponent } from './navbar-perrol.component';

describe('NavbarPerrolComponent', () => {
  let component: NavbarPerrolComponent;
  let fixture: ComponentFixture<NavbarPerrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPerrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPerrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
