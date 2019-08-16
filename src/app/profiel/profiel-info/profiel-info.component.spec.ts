import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfielInfoComponent } from './profiel-info.component';

describe('ProfielInfoComponent', () => {
  let component: ProfielInfoComponent;
  let fixture: ComponentFixture<ProfielInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfielInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfielInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
