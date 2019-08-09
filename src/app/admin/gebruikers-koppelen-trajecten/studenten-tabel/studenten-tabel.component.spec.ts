import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentenTabelComponent } from './studenten-tabel.component';

describe('StudentenTabelComponent', () => {
  let component: StudentenTabelComponent;
  let fixture: ComponentFixture<StudentenTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentenTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentenTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
