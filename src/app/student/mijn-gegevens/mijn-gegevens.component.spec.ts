import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MijnGegevensComponent } from './mijn-gegevens.component';

describe('MijnGegevensComponent', () => {
  let component: MijnGegevensComponent;
  let fixture: ComponentFixture<MijnGegevensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MijnGegevensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MijnGegevensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
