import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UitwerkingenLijstComponent } from './uitwerkingen-lijst.component';

describe('UitwerkingenLijstComponent', () => {
  let component: UitwerkingenLijstComponent;
  let fixture: ComponentFixture<UitwerkingenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UitwerkingenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UitwerkingenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
