import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrajectenComponent } from './home-trajecten.component';

describe('HomeTrajectenComponent', () => {
  let component: HomeTrajectenComponent;
  let fixture: ComponentFixture<HomeTrajectenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrajectenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrajectenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
