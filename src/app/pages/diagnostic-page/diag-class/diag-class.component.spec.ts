import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagClassComponent } from './diag-class.component';

describe('DiagClassComponent', () => {
  let component: DiagClassComponent;
  let fixture: ComponentFixture<DiagClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
