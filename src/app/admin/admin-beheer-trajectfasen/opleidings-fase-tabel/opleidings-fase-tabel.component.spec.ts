import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpleidingsFaseTabelComponent } from './opleidings-fase-tabel.component';

describe('OpleidingsFaseTabelComponent', () => {
  let component: OpleidingsFaseTabelComponent;
  let fixture: ComponentFixture<OpleidingsFaseTabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpleidingsFaseTabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpleidingsFaseTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
