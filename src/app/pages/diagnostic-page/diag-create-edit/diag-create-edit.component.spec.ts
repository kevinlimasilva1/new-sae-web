import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagCreateEditComponent } from './diag-create-edit.component';

describe('DiagCreateEditComponent', () => {
  let component: DiagCreateEditComponent;
  let fixture: ComponentFixture<DiagCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
