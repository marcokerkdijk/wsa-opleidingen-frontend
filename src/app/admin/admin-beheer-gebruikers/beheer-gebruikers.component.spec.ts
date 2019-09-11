import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerGebruikersComponent } from './beheer-gebruikers.component';

describe('BeheerGebruikersComponent', () => {
  let component: BeheerGebruikersComponent;
  let fixture: ComponentFixture<BeheerGebruikersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerGebruikersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerGebruikersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
