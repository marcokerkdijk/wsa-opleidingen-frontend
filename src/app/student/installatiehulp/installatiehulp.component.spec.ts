import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallatiehulpComponent } from './installatiehulp.component';

describe('InstallatiehulpComponent', () => {
  let component: InstallatiehulpComponent;
  let fixture: ComponentFixture<InstallatiehulpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstallatiehulpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstallatiehulpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
