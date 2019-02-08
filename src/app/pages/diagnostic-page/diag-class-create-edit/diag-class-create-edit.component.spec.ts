import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagClassCreateEditComponent } from './diag-class-create-edit.component';

describe('DiagClassCreateComponent', () => {
  let component: DiagClassCreateEditComponent;
  let fixture: ComponentFixture<DiagClassCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagClassCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagClassCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
