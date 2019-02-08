import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagDescriptionComponent } from './diag-description.component';

describe('DiagDescriptionComponent', () => {
  let component: DiagDescriptionComponent;
  let fixture: ComponentFixture<DiagDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
