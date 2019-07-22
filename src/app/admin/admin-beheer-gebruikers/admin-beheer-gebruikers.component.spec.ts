import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBeheerGebruikersComponent } from './admin-beheer-gebruikers.component';

describe('AdminBeheerGebruikersComponent', () => {
  let component: AdminBeheerGebruikersComponent;
  let fixture: ComponentFixture<AdminBeheerGebruikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBeheerGebruikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBeheerGebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
