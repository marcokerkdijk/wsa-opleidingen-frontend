import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocentStudentenlijstComponent } from './docent-studentenlijst.component';

describe('DocentStudentenlijstComponent', () => {
  let component: DocentStudentenlijstComponent;
  let fixture: ComponentFixture<DocentStudentenlijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocentStudentenlijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocentStudentenlijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
