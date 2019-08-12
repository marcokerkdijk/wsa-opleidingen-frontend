import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KoppelDocentComponent } from './koppel-docent.component';

describe('KoppelDocentComponent', () => {
  let component: KoppelDocentComponent;
  let fixture: ComponentFixture<KoppelDocentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KoppelDocentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KoppelDocentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
