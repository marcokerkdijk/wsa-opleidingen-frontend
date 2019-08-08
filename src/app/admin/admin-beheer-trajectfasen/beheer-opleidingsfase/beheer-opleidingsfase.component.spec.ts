import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerOpleidingsfaseComponent } from './beheer-opleidingsfase.component';

describe('BeheerOpleidingsfaseComponent', () => {
  let component: BeheerOpleidingsfaseComponent;
  let fixture: ComponentFixture<BeheerOpleidingsfaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeheerOpleidingsfaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeheerOpleidingsfaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
