import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentUitwerkingenComponent } from './docent-uitwerkingen.component';

describe('DocentUitwerkingenComponent', () => {
  let component: DocentUitwerkingenComponent;
  let fixture: ComponentFixture<DocentUitwerkingenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentUitwerkingenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentUitwerkingenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
