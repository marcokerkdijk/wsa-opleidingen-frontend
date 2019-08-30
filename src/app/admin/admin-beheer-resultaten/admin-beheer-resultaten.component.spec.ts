import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeheerResultatenComponent } from './admin-beheer-resultaten.component';

describe('AdminBeheerResultatenComponent', () => {
  let component: AdminBeheerResultatenComponent;
  let fixture: ComponentFixture<AdminBeheerResultatenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerResultatenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerResultatenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
