import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotitiesInformatieComponent } from './notities-informatie.component';

describe('NotitiesInformatieComponent', () => {
  let component: NotitiesInformatieComponent;
  let fixture: ComponentFixture<NotitiesInformatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotitiesInformatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotitiesInformatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
