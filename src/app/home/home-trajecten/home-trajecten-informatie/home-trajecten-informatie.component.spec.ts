import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrajectenInformatieComponent } from './home-trajecten-informatie.component';

describe('HomeTrajectenInformatieComponent', () => {
  let component: HomeTrajectenInformatieComponent;
  let fixture: ComponentFixture<HomeTrajectenInformatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTrajectenInformatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTrajectenInformatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
