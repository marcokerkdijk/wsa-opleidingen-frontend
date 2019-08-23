import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoorbereidingComponent } from './voorbereiding.component';

describe('VoorbereidingComponent', () => {
  let component: VoorbereidingComponent;
  let fixture: ComponentFixture<VoorbereidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoorbereidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoorbereidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
