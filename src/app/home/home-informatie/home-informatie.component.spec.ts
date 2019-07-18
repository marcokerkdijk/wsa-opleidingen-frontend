import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInformatieComponent } from './home-informatie.component';

describe('HomeInformatieComponent', () => {
  let component: HomeInformatieComponent;
  let fixture: ComponentFixture<HomeInformatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInformatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInformatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
